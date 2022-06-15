package com.community_crawling.crawling.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.community_crawling.crawling.vo.CrawlingDataVO;
import com.community_crawling.crawling.vo.CrawlingFileVO;

@Mapper
public interface CrawlingMapper {

	int insertCrawlingData(CrawlingDataVO dataVO);

	void insertCrawlingFile(List<CrawlingFileVO> fileList);

	List<CrawlingDataVO> selectCrawlingDataList();

	CrawlingDataVO selectCrawlingData(CrawlingDataVO dataVO);
}
