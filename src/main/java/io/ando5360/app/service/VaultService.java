package io.ando5360.app.service;

import io.ando5360.app.dto.AuthStateDTO;
import io.ando5360.app.entity.UserSecret;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestClient;

import java.util.HashSet;

@Service
public class VaultService {

    RestClient vaultClient;

    VaultService() {
        this.vaultClient = RestClient.builder()
                .baseUrl("http://localhost:8200")
                .defaultHeader(HttpHeaders.ACCEPT, "application/json")
                .defaultHeader("X-Vault-Token", "xxx")
                .build();

    }

    static HashSet<String> activeSessions;


    boolean isAuthenticated(String token){
        return activeSessions.contains(token);
    }

    public void loginUser(String username, @RequestBody UserSecret password){
        this.vaultClient.post()
                .uri("/v1/auth/userpass/login/{username}")
                .body(password)
                .retrieve();
    }

    void syncAuthState(){
        AuthStateDTO data = this.vaultClient.get()
                .uri("/v1/auth/token/accessors")
                .retrieve()
                .body(AuthStateDTO.class);
    }
}
