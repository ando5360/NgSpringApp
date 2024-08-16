package io.ando5360.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPostDTO {
	private Long postId;
	private String postType;
	private String postDescription;
	private String imageName;
	private String imageBytesInstr;
	private Boolean isApproved; 
}
