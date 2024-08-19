package io.ando5360.app.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPostDTO {
    String author;
    String entityId;
    String title;
    String content;
    long userId;
    long postId;
}
