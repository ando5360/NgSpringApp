package io.ando5360.app.dto.vault;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.Map;


@Getter
@Setter
public class VaultResponseDTO implements Serializable {
    private String request_id;
    private String lease_id;
    private boolean renewable;
    private int lease_duration;
    private Object data;
    private Object wrap_info;
    private Object warnings;
    private Auth auth;
    private String mount_type;

    // Getters and Setters
    @Getter
    @Setter
    public static class Auth {
        private String client_token;
        private String accessor;
        private List<String> policies;
        private List<String> token_policies;
        private Map<String, String> metadata;
        private int lease_duration;
        private boolean renewable;
        private String entity_id;
        private String token_type;
        private boolean orphan;
        private Object mfa_requirement;
        private int num_uses;
        // Getters and Setters
    }
}