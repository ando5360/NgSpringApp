package io.ando5360.app.dto;
 
import io.ando5360.app.pojo.Role;
import io.ando5360.app.dto.UserMetaDataDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO{
	private String username;
	private String password;
	private int uid;
	private UserPostDTO[] posts;
	private Role role;
	private UserMetaDataDTO userDetails;
}