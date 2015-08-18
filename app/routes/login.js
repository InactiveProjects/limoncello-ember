import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    login() {
      const controller = this.controller;
      let login = controller.get("login");
      let password = controller.get("password");

      login    = login ? login : "";
      password = password ? password : "";

      this.get('session').authenticate('authenticator:basicToJwt', {login, password})
        .then(() => {
          //console.log("Authenticate success");
        }, (/*message*/) => {
          //console.log("Authenticate fail " + message);
      });
    }

  }

});
