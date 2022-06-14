package com.community_crawling.crawling.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.community_crawling.crawling.dao.CrawlingMapper;
import com.community_crawling.crawling.vo.CrawlingDataVO;

@Service
public class CrawlingService {
	
	@Autowired
	CrawlingMapper crawlingDAO;

	public void insertCrawlingData(CrawlingDataVO dataVO) {
		System.out.println("save");
		System.out.println(dataVO.toString());
		
		crawlingDAO.insertCrawlingData(dataVO);
		
		if(dataVO.getFileList() != null && dataVO.getFileList().size() != 0) {
			for(int i=0; i<dataVO.getFileList().size(); i++) {
				dataVO.getFileList().get(i).setCrwalingDataIdx(dataVO.getIdx());
			}
			
			crawlingDAO.insertCrawlingFile(dataVO.getFileList());			
		}
	} 
}
