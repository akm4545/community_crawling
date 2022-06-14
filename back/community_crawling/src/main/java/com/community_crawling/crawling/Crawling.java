package com.community_crawling.crawling;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
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
	
	public static void runSelenium(ChromeDriver driver, String url, int searchSize, int pageSize) throws Exception {
		driver.get(url);
		
		try {
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
			
			for(int i=0; i<2; i++) {
				if(i == 0) {
					continue;
				}
				
				WebElement parent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".table-divider")));
				List<WebElement> contents = parent.findElements(By.cssSelector("span.title-link"));
				
				contents.get(i).click();
				
				WebElement contentParent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div#article_1")));
				List<WebElement> pList = contentParent.findElements(By.cssSelector("div.rhymix_content p"));
				
				for(int j=0; j<pList.size(); j++) {
					WebElement pContent = pList.get(j);
					List<WebElement> pInnerContent = pContent.findElements(By.cssSelector("*"));
					
					if(pInnerContent.size() != 0) {
						String tagName = pInnerContent.get(0).getTagName();
						
						if(tagName.equals("img")) {
							System.out.println(pInnerContent.get(0).getAttribute("src"));
						}
					}
					
					System.out.println(pList.get(j).getText());
					System.out.println(pInnerContent.size());
				}
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		driver.quit();
	}
}
