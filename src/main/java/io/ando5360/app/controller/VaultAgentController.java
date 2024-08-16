package io.ando5360.app.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/*
    Endpoint for communication java app to communicate
    with vault, ldaps and mysql
    Any operation to vault thats requires write permissions should be done here
 */
@RestController
public class VaultAgentController {

    @Value("${vault.token}")
    private String vaultToken;

    @PostMapping("/v1/auth/userpass/users/{username}")
    void createUser(@RequestHeader Map<String, String> headers, @PathVariable("username") String itemId) {
        headers.put(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
        headers.put("X-Vault-Token", vaultToken);
    }

    @GetMapping("/v1/auth/token/accessors")
    void isAuthenticated(@RequestHeader Map<String, String> headers) {
        headers.put(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
        headers.put("X-Vault-Token", vaultToken);
    }
}
