package io.ando5360.app.dto.app;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserPasswordDTO implements Serializable {
    private String password;
}
