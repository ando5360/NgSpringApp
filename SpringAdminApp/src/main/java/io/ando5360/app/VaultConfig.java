package io.ando5360.app;

import org.springframework.context.annotation.Configuration;

@Configuration
public class VaultConfig extends AbstractVaultConfiguration {

    @Override
    public ClientAuthentication clientAuthentication() {
        return new TokenAuthentication(getEnvironment().getProperty("vault.token"));
    }
}