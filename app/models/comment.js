import DS from 'ember-data';

export default DS.Model.extend({

  body: DS.attr('string'),
  post: DS.belongsTo('post', {async: true})

});
