package io.ando5360.app.service;

import io.ando5360.app.dto.app.UserPostDTO;
import io.ando5360.app.dto.app.UserPostSubmissionDTO;
import io.ando5360.app.dto.vault.VaultResponseDTO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	VaultService vaultService;

	@Transactional
	public int insertNewUser(VaultResponseDTO res) {
		return entityManager.createNativeQuery("INSERT INTO `user` (ENTITY_ID, IS_ACTIVE) VALUES (?,?)")
				.setParameter(1, res.getAuth().getEntity_id())
				.setParameter(2, true)
				.executeUpdate();
	}

	@Transactional
	public int insertUserPost(Long userId, UserPostSubmissionDTO userPost) {
		// TODO: Check if user has active session via accessor ID.
		return entityManager.createNativeQuery("INSERT INTO `posts` (USER_ID, TITLE, CONTENT) VALUES (?,?,?)")
				.setParameter(1, userId)
				.setParameter(2, userPost.getPostTitle())
				.setParameter(3, userPost.getPostContent())
				.executeUpdate();
	}

	@Transactional
	public List<UserPostDTO> getUserPosts() {
		List<UserPostDTO> userPostsList = new ArrayList<>();
		// TODO: Check if user has active session via accessor ID.
		List<Object[]> results = entityManager.createNativeQuery("SELECT POST_ID, USER_ID, TITLE, CONTENT FROM posts")
				.getResultList();
		results.stream()
				.map(this::mapToUserPostDTO)
				.toList()
				.forEach((UserPostDTO post) -> {
							post.setEntityId(findEntityIdByUserId(post.getUserId()));
							userPostsList.add(post);
							post.setAuthor(this.vaultService.getUsernameByEntityId(post.getEntityId()));
						}
				);
		return userPostsList;
	}

	private UserPostDTO mapToUserPostDTO(Object[] result) {
		UserPostDTO dto = new UserPostDTO();
		dto.setPostId(((Number) result[0]).longValue());
		dto.setUserId(((Number) result[1]).longValue());
		dto.setTitle((String) result[2]);
		dto.setContent((String) result[3]);
		return dto;
	}


	@Transactional
	public Long findUserIdByEntityId(String entityId) {
		Query query = entityManager.createNativeQuery("SELECT USER_ID FROM `user` WHERE ENTITY_ID = ?")
				.setParameter(1, entityId);
		Object result = query.getSingleResult();
		return result != null ? ((Number) result).longValue() : null;
	}

	@Transactional
	public String findEntityIdByUserId(long userId) {
		System.out.println(userId);
		Query query = entityManager.createNativeQuery("SELECT ENTITY_ID FROM `user` WHERE USER_ID = ?")
				.setParameter(1, userId);
		Object result = query.getSingleResult();
		return result != null ? (String) result : null;
	}
}