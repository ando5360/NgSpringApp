package io.ando5360.app.entity;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class UserSecret implements Serializable {
    String password;
}
