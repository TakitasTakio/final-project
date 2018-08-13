interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'GiGT9cy4VA1o8tIflSR2YW6d7Esvoyvf',
  domain: 'simonw1.auth0.com',
  callbackURL: 'http://localhost:4200/dash'
};
