import Ember from 'ember';

const successHandler = (jwt) => {
  Ember.Logger.debug('Logged in successfully. Jwt:', jwt);
};

const errorHandler = (reason) => {
  Ember.Logger.error('Error:', reason.errors);
};

export default Ember.Route.extend({

  actions: {

    login() {
      const controller = this.controller;
      let login = controller.get('login');
      let password = controller.get('password');

      login    = login ? login : '';
      password = password ? password : '';

      this
        .get('session')
        .authenticate('authenticator:basicToJwt', {login, password})
        .then(successHandler, errorHandler);
    }

  }

});
