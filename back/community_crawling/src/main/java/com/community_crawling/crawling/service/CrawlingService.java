package com.community_crawling.crawling.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.community_crawling.crawling.dao.CrawlingMapper;

@Service
public class CrawlingService {
	
	@Autowired
	CrawlingMapper CrawlingDAO; 
}
