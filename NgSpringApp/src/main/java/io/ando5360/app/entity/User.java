package io.ando5360.app.entity;

import java.io.Serializable;
import io.ando5360.app.dto.UserDetailsDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import io.ando5360.app.pojo.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "USER")
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USER_ID")
	private Long userId;

	@Column(name = "USERNAME")
	private String username;

	@Column(name = "PASSWORD")
	private String password;

	@Column(name = "IS_ACTIVE")
	private Boolean active;

	@Column(name = "ACCOUNT_TYPE")
	private Role role;

	private UserDetailsDTO userDetails;

	public User() {
		super();
	}

	public User(Long userId, String userName, String password, Boolean active, Role role) {
		super();
		this.userId = userId;
		this.username = userName;
		this.password = password;
		this.active = active;
		this.role = role;
	}


}