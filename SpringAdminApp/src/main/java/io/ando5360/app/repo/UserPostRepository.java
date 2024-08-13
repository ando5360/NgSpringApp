package io.ando5360.app.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import io.ando5360.app.entity.UserPost;

public interface UserPostRepository extends JpaRepository<UserPost, Long> {

	@Query("select o from Posts o where o.user.userId = :userId")
	public List<UserPost> findAllPostsByUserId(@Param("userId") Long userId);

}