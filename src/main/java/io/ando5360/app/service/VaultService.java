package io.ando5360.app.service;

import io.ando5360.app.dto.vault.VaultLookupDTO;
import io.ando5360.app.dto.vault.VaultResponseDTO;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import io.ando5360.app.dto.vault.AliasDTO;

@Service
public class VaultService {

    RestClient vaultClient;

    VaultService(Environment env) {
        this.vaultClient = RestClient.builder()
                .baseUrl("http://localhost:8200")
                .defaultHeader(HttpHeaders.ACCEPT, "application/json")
                .defaultHeader("X-Vault-Token", env.getProperty("vault.token"))
                .build();
    }

    public String getUsernameByEntityId(String entityId){
        VaultLookupDTO response = this.vaultClient.post()
                .uri("/v1/identity/lookup/entity")
                .body("{\"id\" : \"" + entityId + "\"}")
                .retrieve()
                .toEntity(VaultLookupDTO.class)
                .getBody();

        for(AliasDTO alias : response.getData().getAliases()){
            return alias.getName();
        }
        return "anonymous";

    }

    public VaultResponseDTO  createUser(String username, String password) throws Exception {
        String jsonBody = String.format("{\"password\":\"%s\"}", password);
        if (this.vaultClient.post()
                .uri("/v1/auth/userpass/users/{username}", username)
                .body(jsonBody)
                .retrieve()
                .toEntity(String.class)
                .getStatusCode()
                .value() == 204){
            return loginUser(username, password);
        }else{
            throw new Exception();
        }
    }

    public VaultResponseDTO loginUser(String username, String password) throws Exception {
        String jsonBody = String.format("{\"password\":\"%s\"}", password);
        return this.vaultClient.post()
                .uri("/v1/auth/userpass/login/{username}", username)
                .body(jsonBody)
                .retrieve()
                .toEntity(VaultResponseDTO.class)
                .getBody();

    }

    // TODO:
        // DELETE USER
        // Check for admin policy
}
