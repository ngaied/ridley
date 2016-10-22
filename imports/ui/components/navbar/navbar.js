import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateUrl from './navbar.html';

class NavCtrl {
  constructor($state, $userRole) {
    this.router    = $state;
    this.$userRole = $userRole;
  }
  
  isAdmin() {
    return this.$userRole.isAdmin();
  }
  
  logout() {
    var ctrl = this;
    Meteor.logout(function(err) {
      ctrl.router.go('login');
    })
  }
}

export default angular.module('Navbar', [
  angularMeteor
])
.component('navbar', {
  templateUrl,
  controller : NavCtrl
});
