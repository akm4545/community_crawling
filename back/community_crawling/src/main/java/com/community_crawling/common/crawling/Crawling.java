package com.community_crawling.common.crawling;

import java.awt.image.BufferedImage;
import java.io.FileOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.community_crawling.crawling.service.CrawlingService;
import com.community_crawling.crawling.vo.CrawlingDataVO;
import com.community_crawling.crawling.vo.CrawlingFileVO;

@Component
public class Crawling {
	
	@Value("${chromeDriver.path}")
	private String chromeDriverPath;
	
	@Value("${crawling.image.url}")
	private String imageUrl;
	
	@Autowired
	CrawlingService crawlingService; 
	
	public ChromeDriver getChromeDriver() throws Exception{
		return createChromeDriver();
	}
	
	public ChromeDriver createChromeDriver() throws Exception {
		Path path = Paths.get(chromeDriverPath);
		System.setProperty("webdriver.chrome.driver", path.toString());
		
		ChromeOptions options = new ChromeOptions();
		
		options.addArguments("--start-maximized");
		options.addArguments("--headless");
		options.addArguments("--idsable-gpu");
		options.addArguments("--no-sandbox");
		
		ChromeDriver driver = new ChromeDriver(options);
		
		return driver;
	}
	
	//커뮤니티 하나 더 분석 후 메서드로 쪼개기
	public void runSelenium(ChromeDriver driver) throws Exception {
		CrawlingInfo crawlingInfo = new CrawlingInfo().getDogdripTemplate();
		
		try {
			driver.get(crawlingInfo.getUrl());
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
			
			for(int i=0; i<crawlingInfo.getSearchPageSize(); i++) {
				for(int j=0; j<crawlingInfo.getPageSize() - 1; j++) {
					if(j == 0) {
						continue;
					}
					List<CrawlingFileVO> fileList = new ArrayList<CrawlingFileVO>(); 
					CrawlingDataVO dataVO = new CrawlingDataVO();
					dataVO.setContent("");
					
					WebElement parent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(crawlingInfo.getListParentNode())));
					List<WebElement> contents = parent.findElements(By.cssSelector(crawlingInfo.getListItemNode()));
					
					dataVO.setTitle(contents.get(j).getText());
					
					contents.get(j).click();
					
					WebElement contentParent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(crawlingInfo.getListParentNode())));
					List<WebElement> contentItem = contentParent.findElements(By.cssSelector(crawlingInfo.getListItemNode()));
					
					for(int k=0; k<contentItem.size(); k++) {
						WebElement pContent = contentItem.get(k);
						List<WebElement> pInnerContent = pContent.findElements(By.cssSelector("*"));
						
						if(pInnerContent.size() != 0) {
							String tagName = pInnerContent.get(0).getTagName();
							String tagElement = ""; 
							
							if(tagName.equals("img")) {
								CrawlingFileVO fileVO = new CrawlingFileVO();
								
								String src = pInnerContent.get(0).getAttribute("src");
								
								fileVO.setPath(crawlingImageSaver(src, crawlingInfo.getUrl()));
								tagElement += "<img src=" + imageUrl + fileVO.getPath() + "/>";
								dataVO.setContent(dataVO.getContent() + tagElement);
								
								fileList.add(fileVO);
							}
						}else {
							//System.out.println(pContent.getText().equals(" "));
							dataVO.setContent(dataVO.getContent() + pContent.getText());
						}
					}
					dataVO.setFileList(fileList);
					
					crawlingService.insertCrawlingData(dataVO);
				}
				driver.get(crawlingInfo.getUrl() + "page=" + (i + 1));
			}
		}catch (Exception e) {
			e.printStackTrace();
			driver.quit();
		}
		
		driver.quit();
	}
	
	public String crawlingImageSaver (String src, String url) {
		String path = "C:\\CC";
		String fileName = "";
		String extension = "";
		
		try {
			HttpURLConnection conn = null;
			URL imgUrl = new URL(src);
			
			fileName = src.substring(src.lastIndexOf("/") + 1);
			fileName = fileName.substring(0, fileName.lastIndexOf("."));
			extension = src.substring(src.lastIndexOf(".") + 1);
			String referer = url.substring(0, url.lastIndexOf("?"));
			
			conn = (HttpURLConnection) imgUrl.openConnection();
			conn.setRequestProperty("Referer", referer);
			
			BufferedImage buffImg = ImageIO.read(conn.getInputStream());
			FileOutputStream fos = new FileOutputStream(path + "/" + fileName + "." + extension);
			ImageIO.write(buffImg, extension, fos);
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return fileName + "." + extension;
	};
	
	
}
