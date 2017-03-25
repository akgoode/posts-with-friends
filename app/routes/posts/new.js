import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log('got to route model');
    return this.get('store').createRecord('post', {});
  },
  actions: {
    createPost (post) {
      console.log(post);
      console.log('got to createPost');
      // post.save()
      //   .then(() => this.transitionTo('posts'));
    },
  }
});
