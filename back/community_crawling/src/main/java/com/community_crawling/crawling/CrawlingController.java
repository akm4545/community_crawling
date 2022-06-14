package com.community_crawling.crawling;

import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CrawlingController {
	
	@Autowired
	Crawling crawling;
	
	@GetMapping("/test")
	public void CrawlingRun() throws Exception {
		ChromeDriver driver = crawling.getChromeDriver();
		
		crawling.runSelenium(driver, "https://www.dogdrip.net/dogdrip", 100, 21);
	}
}
