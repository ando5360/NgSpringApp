import { PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
              authority: 'http://localhost:4200/vault-proxy/v1/identity/oidc/provider/myvault',
              redirectUrl: 'http://localhost:4200/vault-proxy/ui',
              postLogoutRedirectUri: window.location.origin,
              clientId: 'Bn3MmtAEK9s2LuoS4QlvcyEv7NuknoXr',
              scope: 'user', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
}
