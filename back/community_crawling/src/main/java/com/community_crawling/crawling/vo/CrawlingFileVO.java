package com.community_crawling.crawling.vo;

public class CrawlingFileVO {
	private int idx;
	
	private String path;
	
	private String registrationDate;
	
	private int crwalingDataIdx;

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public int getCrwalingDataIdx() {
		return crwalingDataIdx;
	}

	public void setCrwalingDataIdx(int crwalingDataIdx) {
		this.crwalingDataIdx = crwalingDataIdx;
	}

	@Override
	public String toString() {
		return "CrawlingFileVO [idx=" + idx + ", path=" + path + ", registrationDate=" + registrationDate
				+ ", crwalingDataIdx=" + crwalingDataIdx + "]";
	}
}
