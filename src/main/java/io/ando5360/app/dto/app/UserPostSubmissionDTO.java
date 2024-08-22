package io.ando5360.app.dto.app;

import java.io.Serializable;

public class UserPostSubmissionDTO implements Serializable {
	private String postTitle;
	private String postContent;
	private String entityId;
	private String accessorId;

	public String getPostTitle() {
		return this.postTitle;
	}

	public String getPostContent() {
		return this.postContent;
	}

	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}

	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}

	public String getEntityId() {
		return this.entityId;
	}

	public String getAccessorId() {
		return this.accessorId;
	}

	public void setEntityId(String entityId) {
		this.entityId = entityId;
	}

	public void setAccessorId(String accessorId) {
		this.accessorId = accessorId;
	}
}
