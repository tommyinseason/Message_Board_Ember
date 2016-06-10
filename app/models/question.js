import Model from 'ember-data/model';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
});
