import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('post', {});
  },
  actions: {
    createPost (post) {
      post.save()
        .then(() => this.transitionTo('posts'));
    },
    cancel () {
      history.back();
    }
  }
});
