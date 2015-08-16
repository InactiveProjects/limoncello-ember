import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.belongsTo('author', {async: true}),
  site: DS.belongsTo('site', {async: true}),
  comment: DS.hasMany('comment', {async: true})

});
