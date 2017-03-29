import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .then(() => {
        credentials.password = null;
        credentials.email = null;
        credentials.passwordConfirmation = null;
        this.transitionTo('application');
      })
      .then(() => {
        this.get('flashMessages')
        .success('Successfully signed-up! You have also been signed-in.');
      })
      .then(() => this.transitionTo('posts'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
