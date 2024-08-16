package io.ando5360.app.dto;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserDetailsDTO implements Serializable {
    private String description;
    private String funfact;
    private String favouriteFood;
    private String nickname;
}
