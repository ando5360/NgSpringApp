package io.ando5360.app.dto;
 
import java.io.Serializable;

import io.ando5360.app.entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO implements Serializable {

	private String userName;
	private String password;
	private int uid;
	private UserPostDTO[] posts;
	private Role role;


}