package io.ando5360.app.entity;

import java.io.Serializable;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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

	@Column(name = "USER_NAME")
	private String userName;

	@Column(name = "PASSWORD")
	private String password;

	@Column(name = "IS_ACTIVE")
	private Boolean active;

	
	@Column(name = "ACCOUNT_TYPE")
	private Set<Role> roles;

	public User() {
		super();
	}
	/**
	 * @param userId
	 * @param userName
	 * @param password
	 * @param active
	 * @param roles
	 */
	public User(Long userId, String userName, String password, Boolean active, Set<Role> role) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.active = active;
		this.roles = roles;
	}
}