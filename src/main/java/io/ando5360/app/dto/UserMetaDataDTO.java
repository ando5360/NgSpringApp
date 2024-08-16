package io.ando5360.app.dto;

import io.ando5360.app.pojo.Role;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserMetaDataDTO{
    private String description;
    private String funfact;
    private String favouriteFood;
    private String nickname;
}
