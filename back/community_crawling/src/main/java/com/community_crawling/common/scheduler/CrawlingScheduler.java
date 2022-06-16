package com.community_crawling.common.scheduler;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.community_crawling.common.crawling.Crawling;
import com.community_crawling.common.crawling.CrawlingInfo;

@Component
public class CrawlingScheduler {
	
	@Autowired
	Crawling crawling;
	
	@Scheduled(cron = "0 0 4 * * *")
	public void crwalingRun() {
		try {
			ChromeDriver driver = crawling.getChromeDriver();
			
			CrawlingInfo dogdrip = new CrawlingInfo().getDogdripTemplate();
			CrawlingInfo theqoo = new CrawlingInfo().getTheqooTemplate();
		
			List<CrawlingInfo> crawlingSiteList = new ArrayList<CrawlingInfo>();
			
			crawlingSiteList.add(dogdrip);
			crawlingSiteList.add(theqoo);
			
			for(int i=0; i<crawlingSiteList.size(); i++) {
				crawling.runSelenium(driver, crawlingSiteList.get(i));				
			}
		}catch (Exception e) {
			e.printStackTrace();
		}		
	};
}
