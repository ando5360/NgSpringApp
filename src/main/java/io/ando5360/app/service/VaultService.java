package io.ando5360.app.service;

import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
public class VaultService {
    static HashSet<String> activeSessions;

    boolean isAuthenticated(String token){
        return activeSessions.contains(token);
    }


}
