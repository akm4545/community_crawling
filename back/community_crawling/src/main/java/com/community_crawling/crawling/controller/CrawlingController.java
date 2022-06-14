package com.community_crawling.crawling.controller;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.community_crawling.crawling.Crawling;
import com.community_crawling.crawling.service.CrawlingService;

@RestController
public class CrawlingController {
	
	@Autowired
	Crawling crawling;
	
	@Autowired
	CrawlingService crawlingService; 
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/test")
	public Map<String, Object> CrawlingRun() throws Exception {
		Map<String, Object> responseMap = new HashMap<String, Object>();
		
		ChromeDriver driver = crawling.getChromeDriver();
		crawling.runSelenium(driver, "https://www.dogdrip.net/dogdrip?", 1, 8);
		
		//responseMap.put("data", );
		
		return responseMap;
	}
}
