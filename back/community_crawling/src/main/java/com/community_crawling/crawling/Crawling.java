package com.community_crawling.crawling;

import java.io.File;
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
import org.springframework.stereotype.Component;

@Component
public class Crawling {
	
	public static void runSelenium(String url) throws Exception {
		Path path = Paths.get(System.getProperty("user.dir"), "src/cromDriver/chromedriver.exe");
		System.setProperty("webdriver.chrom.dirver", path.toString());
		
		ChromeOptions options = new ChromeOptions();
		
		options.addArguments("--start-maximized");
		options.addArguments("--headless");
		options.addArguments("--idsable-gpu");
		options.addArguments("--no-sandbox");
		
		ChromeDriver driver = new ChromeDriver(options);
		
		driver.get(url);
		
		try {
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
			//웹의 최상의 dom인듯
			WebElement parent = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("section[aria-labelledby*=\\\"accessible-list\\\"]"))); //해당 dom이 렌더링 되길 기다림
			
			List<WebElement> contents = parent.findElements(By.cssSelector("div.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll"));
			System.out.println("조회된 컨텐츠 수 : " + contents.size());
			
			if(contents.size() > 0) {
				for(int i=0; i<contents.size(); i++) {
					String username = contents.get(i).findElement(By.cssSelector("span > span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0")).getText();
                    String id = contents.get(i).findElement(By.cssSelector("span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0")).getText();
                    String text = contents.get(i).findElement(By.cssSelector("div.css-901oao.r-hkyrab.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0")).getText();
                    
                    System.out.println( "========================" );
                    System.out.println( username+" "+id );
                    System.out.println( text );
                    System.out.println( "========================" );
				}
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		driver.quit();
	}
}
