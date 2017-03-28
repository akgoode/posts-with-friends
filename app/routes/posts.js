import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let store = this.get('store');
    store.unloadAll('post');
    return store.findAll('post');
  },
  actions: {
    deletePost(post) {
      post.destroyRecord();
    },
  }
});
