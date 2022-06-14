package com.community_crawling.crawling.vo;

import java.util.List;

public class CrawlingDataVO {
	private int idx;
	
	private String title;
	
	private String content;
	
	private String registrationDate;
	
	private List<CrawlingFileVO> fileList;

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public List<CrawlingFileVO> getFileList() {
		return fileList;
	}

	public void setFileList(List<CrawlingFileVO> fileList) {
		this.fileList = fileList;
	}

	@Override
	public String toString() {
		return "CrawlingDataVO [idx=" + idx + ", title=" + title + ", content=" + content + ", registrationDate="
				+ registrationDate + ", fileList=" + fileList + "]";
	}
}
