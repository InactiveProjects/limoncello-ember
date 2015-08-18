import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import environment from 'limoncello-ember/config/environment';

const { API } = environment;
const LOGIN_BASIC_URL = API.host + "/" + API.loginBasic;

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.access_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(credentials) {
    const login    = credentials.login ? credentials.login : "";
    const password = credentials.password ?  credentials.password : "";
    const basicHeaderValue = "Basic " + btoa(login + ":" + password);

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: LOGIN_BASIC_URL,
        headers: {Authorization: basicHeaderValue}
      }).then((jwt) => {
        Ember.run(() => {
          resolve({ access_token: jwt });
        });
      }, (xhr/*, status, error*/) => {
        let response = JSON.parse(xhr.responseText);
        Ember.run(() => {
          reject(response.error);
        });
      });
    });
  },

  invalidate(/*data*/) {
    return Ember.RSVP.resolve();
  }
});
