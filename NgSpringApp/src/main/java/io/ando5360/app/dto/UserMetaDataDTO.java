package main.java.io.ando5360.app.dto;
 
import io.ando5360.app.pojo.Role;
import lombok.Getter;

@Getter
@Setter
public class UserMetaDataDTO implements Serializable {
    private String description;
    private String funfact;
    private String favouriteFood;
    private String nickname;
}
