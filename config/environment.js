/* jshint node: true */

const API_HOST = 'http://46.101.189.195:80';
const API_NAMESPACE = 'api/v1';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'limoncello-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API: {
      host: API_HOST,
      namespace: API_NAMESPACE
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src' : "'self' 'unsafe-eval'",
    'font-src'   : "'self'",
    'connect-src': "'self' " + API_HOST,
    'img-src'    : "'self' data:",
    'style-src'  : "'self'",
    'media-src'  : "'self'"
  };

  return ENV;
};
