import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },


  actions: {
    addPost(params) {
      var newPost = this.store.createRecord('question', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});







// var questions = [{
//   id: 1,
//   author: "Tommy Jones"
//   question: "Who art thou?"
//
// }]
//
//
