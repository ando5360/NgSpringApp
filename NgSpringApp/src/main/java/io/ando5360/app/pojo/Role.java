package io.ando5360.app.pojo;

import java.io.Serializable;
import io.ando5360.app.dto.UserDetailsDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

public enum Role {
    ADMIN, 
    USER
}
