package com.community_crawling.crawling.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.community_crawling.common.crawling.Crawling;
import com.community_crawling.common.crawling.CrawlingInfo;
import com.community_crawling.crawling.service.CrawlingService;
import com.community_crawling.crawling.vo.CrawlingDataVO;

@RestController
public class CrawlingController {
	
	@Autowired
	Crawling crawling;
	
	@Autowired
	CrawlingService crawlingService; 
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/crawling")
	public Map<String, Object> CrawlingList() throws Exception {
		Map<String, Object> responseMap = new HashMap<String, Object>();
		
		responseMap.put("data", crawlingService.selectCrawlingDataList());
		
		//ChromeDriver driver = crawling.getChromeDriver();
		//crawling.runSelenium(driver, "https://www.dogdrip.net/dogdrip?", 1, 8);
		//crawling.runSelenium(driver);
		
		return responseMap;
	}
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/crawling/{idx}")
	public Map<String, Object> selectCrawling(CrawlingDataVO dataVO) throws Exception {
		Map<String, Object> responseMap = new HashMap<String, Object>();
		
		responseMap.put("data", crawlingService.selectCrawlingData(dataVO));
		
		return responseMap; 
	}
	
	@GetMapping("/test")
	public void test() throws Exception{
		ChromeDriver driver = crawling.getChromeDriver();
		
		CrawlingInfo dogdrip = new CrawlingInfo().getDogdripTemplate();
		CrawlingInfo theqoo = new CrawlingInfo().getTheqooTemplate();
	
		List<CrawlingInfo> crawlingSiteList = new ArrayList<CrawlingInfo>();
		
		crawlingSiteList.add(dogdrip);
		crawlingSiteList.add(theqoo);
		
		for(int i=0; i<crawlingSiteList.size(); i++) {
			crawling.runSelenium(driver, crawlingSiteList.get(i));				
		}
	}
}
