package com.community_crawling.common.crawling;

public class CrawlingInfo {
	
	private String url;
	
	private int searchPageSize;
	
	private int pageSize;
	
	private String listParentNode;
	
	private String listItemNode;
	
	private String contentParentNode;
	
	private String contentItemNode;
	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getSearchPageSize() {
		return searchPageSize;
	}

	public void setSearchPageSize(int searchPageSize) {
		this.searchPageSize = searchPageSize;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public String getListParentNode() {
		return listParentNode;
	}

	public void setListParentNode(String listParentNode) {
		this.listParentNode = listParentNode;
	}

	public String getListItemNode() {
		return listItemNode;
	}

	public void setListItemNode(String listItemNode) {
		this.listItemNode = listItemNode;
	}

	public String getContentParentNode() {
		return contentParentNode;
	}

	public void setContentParentNode(String contentParentNode) {
		this.contentParentNode = contentParentNode;
	}

	public String getContentItemNode() {
		return contentItemNode;
	}

	public void setContentItemNode(String contentItemNode) {
		this.contentItemNode = contentItemNode;
	}

	public CrawlingInfo getDogdripTemplate() {
		CrawlingInfo infoVO = new CrawlingInfo();
		
		infoVO.setUrl("https://www.dogdrip.net/dogdrip?");
		infoVO.setSearchPageSize(1);
		infoVO.setPageSize(8);
		infoVO.setListParentNode(".table-divider");
		infoVO.setListItemNode("span.title-link");
		infoVO.setContentParentNode("div#article_1");
		infoVO.setContentItemNode("div.rhymix_content p");
		
		return infoVO;
	}
	
	public CrawlingInfo getTheqooTemplate() {
		CrawlingInfo infoVO = new CrawlingInfo();
		
		infoVO.setUrl("https://theqoo.net/index.php?mid=hot&filter_mode=normal&");
		infoVO.setSearchPageSize(1);
		infoVO.setPageSize(8);
		infoVO.setListParentNode("table.theqoo_board_table");
		infoVO.setListItemNode("tr:not([notice]:not[notice_expand]");
		infoVO.setContentParentNode("div#article_1");
		infoVO.setContentItemNode("*");
		
		return infoVO;
	}
}
