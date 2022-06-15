package com.community_crawling.common;

import java.io.File;
import java.io.FileInputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class ImageController {
	
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/image")
	public ResponseEntity<byte[]> image(String path) throws Exception {
		try {
			HttpHeaders header = new HttpHeaders();

			header.setContentType(MediaType.IMAGE_PNG);

			return new ResponseEntity<byte[]>(IOUtils.toByteArray(new FileInputStream(new File(path))), header,
					HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("이미지 경로를 찾을 수 없습니다.");
			return new ResponseEntity<byte[]>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
