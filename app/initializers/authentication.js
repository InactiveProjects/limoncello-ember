import BasicToJwtAuthenticator from '../authenticators/basic-to-jwt-authenticator';

export function initialize(container, application) {
  application.register('authenticator:basicToJwt', BasicToJwtAuthenticator);
}

export default {
  name: 'authentication',
  before: 'simple-auth-oauth2',
  initialize: initialize
};
