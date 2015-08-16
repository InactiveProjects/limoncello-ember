import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key/*, attributes*/) {
    if (snapshot.changedAttributes()[key] || snapshot.record.get('isNew'))  {
      return this._super(...arguments);
    }
  }
});
