import DS from 'ember-data';

export default DS.Model.extend({

  first: DS.attr('string'),
  last: DS.attr('string'),
  twitter: DS.attr('string'),
  posts: DS.hasMany('post', {async: true})

});
