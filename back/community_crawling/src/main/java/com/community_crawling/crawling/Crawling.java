package com.community_crawling.crawling;

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

@Component
public class Crawling {
	
	@Value("${chromeDriver.path}")
	private String chromeDriverPath;
	
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
	public List<Map<String, Object>> runSelenium(ChromeDriver driver, String url, int searchPageSize, int pageSize) throws Exception {
		List<Map<String, Object>> titleList = new ArrayList<Map<String, Object>>();
		
		try {
			driver.get(url);
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
			
			for(int i=0; i<searchPageSize; i++) {
				for(int j=0; j<pageSize - 1; j++) {
					if(j == 0) {
						continue;
					}
					
					Map<String, Object> crawlingDataMap = new HashMap<String, Object>();
					
					WebElement parent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".table-divider")));
					List<WebElement> contents = parent.findElements(By.cssSelector("span.title-link"));
					
					crawlingDataMap.put("title", contents.get(j).getText());
					
					contents.get(j).click();
					
					WebElement contentParent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div#article_1")));
					List<WebElement> pList = contentParent.findElements(By.cssSelector("div.rhymix_content p"));
					
					for(int k=0; k<pList.size(); k++) {
						WebElement pContent = pList.get(k);
						List<WebElement> pInnerContent = pContent.findElements(By.cssSelector("*"));
						
						if(pInnerContent.size() != 0) {
							String tagName = pInnerContent.get(0).getTagName();
							
//							System.out.println(tagName);
							
							if(tagName.equals("img")) {
								String src = pInnerContent.get(0).getAttribute("src");
								
								crawlingImageSaver(src, url);
							}
						}
						
//						System.out.println(pList.get(k).getText());
//						System.out.println(pInnerContent.size());
					}
					
					titleList.add(crawlingDataMap);
				}
				
				driver.get(url + "page=" + (i + 1));
			}
		}catch (Exception e) {
			e.printStackTrace();
			driver.quit();
		}
		
		driver.quit();
		
		return titleList;
	}
	
	public void crawlingImageSaver (String src, String url) {
		String path = "C:\\CC";
		
		try {
			HttpURLConnection conn = null;
			URL imgUrl = new URL(src);
			
			String fileName = src.substring(src.lastIndexOf("/") + 1);
			fileName = fileName.substring(0, fileName.lastIndexOf("."));
			String extension = src.substring(src.lastIndexOf(".") + 1);
			String referer = url.substring(0, url.lastIndexOf("?"));
			
			conn = (HttpURLConnection) imgUrl.openConnection();
			conn.setRequestProperty("Referer", referer);
			
			BufferedImage buffImg = ImageIO.read(conn.getInputStream());
			FileOutputStream fos = new FileOutputStream(path + "/" + fileName + "." + extension);
			ImageIO.write(buffImg, extension, fos);
		}catch (Exception e) {
			e.printStackTrace();
		}
	};
}
