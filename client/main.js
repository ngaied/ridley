import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {name as login} from '../imports/ui/components/login/login';
import {name as home} from '../imports/ui/components/home/home';
import {name as graph} from '../imports/ui/components/graph/graph';
import {name as supplierFind} from '../imports/ui/components/supplierFind/supplierFind';
import {name as supplierAdd} from '../imports/ui/components/supplierAdd/supplierAdd';
import {name as supplierEdit} from '../imports/ui/components/supplierEdit/supplierEdit';
import {name as userAdmin} from '../imports/ui/components/userAdmin/userAdmin';

angular.module('score-card', [
  angularMeteor, uiRouter, login, home, graph, supplierFind, supplierAdd, supplierEdit, userAdmin
])
.service('$userRole', function() {
  this.isAdmin = function() {
    return Meteor.user().roles[0] === 'admin';
  }
})
.config(function($stateProvider, $locationProvider, $urlRouterProvider)
{
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when('', '/login');
  $urlRouterProvider.when('/home', '/home/graph');
  $urlRouterProvider.otherwise('/login');
  
  // Temp route for DEV
//  $urlRouterProvider.when('', '/login');
//  $urlRouterProvider.when('/home', '/home/graph');
//  $urlRouterProvider.otherwise('/home/graph');
  
  $stateProvider
  .state('login',
  {
    url: '/login',
    template: '<login></login>'
  })
  .state('home', {
    abstract : true,
    url : '/home',
    template : '<home></home>'
  })
  .state('home.graph', {
    url : '/graph',
    template : '<graph class="col-md-10"></graph>',
  })
  .state('home.supplierSearch',
  {
    url: '/supplier/find',
    template : '<supplier-find class="col-md-10"></supplier-find>',
    params : {
      searchBy : 'byName', value : '', cmp : 'eq', run : false
    }
  })
  .state('home.supplierAdd',
  {
    url: '/supplier/add',
    template : '<supplier-add class="col-md-10"></supplier-add>'
  })
  .state('home.supplierEdit',
  {
    url: '/supplier/edit',
    params : {
      'supplierId' : null
    },
    template : '<supplier-edit class="col-md-10"></supplier-edit>'
  })
  .state('home.admin',
  {
    url: '/admin',
    template : '<user-admin class="col-md-10"></user-admin>'
  });
})
.run(['$state', '$rootScope', function($state, $rootScope) {
  $rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams, options) {
//      if (toState.name !== 'login' && Meteor.user() == null) {
//        event.preventDefault();
//        $state.transitionTo('login');
//      }
//      else if (toState.name === 'home.supplierEdit' && toParams.supplierId == undefined) {
//        $state.transitionTo('home.graph');
//      }
    });
}]);
