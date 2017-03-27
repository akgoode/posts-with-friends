import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editPost (post) {
      post.save()
      .then(() => this.transitionTo('posts'));
    }
  }
});
