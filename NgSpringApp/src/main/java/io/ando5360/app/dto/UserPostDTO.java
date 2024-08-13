package io.ando5360.app.dto;

import org.springframework.web.multipart.MultipartFile;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPostDTO {
	private Long postId;
	private String postType;
	private String postDescription;
	private MultipartFile image;
	private String imageName;
	private String imageBytesInstr;
	private Boolean isApproved; 
}
