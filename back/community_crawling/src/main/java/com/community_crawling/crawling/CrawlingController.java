package com.community_crawling.crawling;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CrawlingController {
	
	@Autowired
	Crawling crawling;
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/test")
	public Map<String, Object> CrawlingRun() throws Exception {
		Map<String, Object> responseMap = new HashMap<String, Object>();
		
		ChromeDriver driver = crawling.getChromeDriver();
		
		responseMap.put("data", crawling.runSelenium(driver, "https://www.dogdrip.net/dogdrip?", 1, 5));
		
		return responseMap;
	}
}
