import { moduleForModel, test } from 'ember-qunit';

moduleForModel('author', 'Unit | Model | author', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
