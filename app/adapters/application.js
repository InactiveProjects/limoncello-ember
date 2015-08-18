import DS from 'ember-data';
import environment from 'limoncello-ember/config/environment';

export default DS.JSONAPIAdapter.extend({

  host: environment.API.host,
  namespace: environment.API.namespace,
  shouldReloadAll: () => true

});
