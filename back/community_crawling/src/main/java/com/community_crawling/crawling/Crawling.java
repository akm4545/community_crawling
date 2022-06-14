package com.community_crawling.crawling;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Crawling {
	
	@Value("${chromeDriver.path}")
	private String chromeDriverPath;
	
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
	public List<String> runSelenium(ChromeDriver driver, String url, int searchPageSize, int pageSize) throws Exception {
		List<String> titleList = new ArrayList<String>();
		
		try {
			driver.get(url);
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
			
			for(int i=0; i<searchPageSize; i++) {
				for(int j=0; j<pageSize - 1; j++) {
					if(j == 0) {
						continue;
					}
					
					WebElement parent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".table-divider")));
					List<WebElement> contents = parent.findElements(By.cssSelector("span.title-link"));
					
					titleList.add(contents.get(j).getText());
					
					contents.get(j).click();
					
					WebElement contentParent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div#article_1")));
					List<WebElement> pList = contentParent.findElements(By.cssSelector("div.rhymix_content p"));
					
					for(int k=0; k<pList.size(); k++) {
						WebElement pContent = pList.get(k);
						List<WebElement> pInnerContent = pContent.findElements(By.cssSelector("*"));
						
						if(pInnerContent.size() != 0) {
							String tagName = pInnerContent.get(0).getTagName();
							
							System.out.println(tagName);
							
							if(tagName.equals("img")) {
								System.out.println(pInnerContent.get(0).getAttribute("src"));
							}
						}
						
						System.out.println(pList.get(k).getText());
						System.out.println(pInnerContent.size());
					}
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
}
