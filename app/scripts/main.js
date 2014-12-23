'use strict';

import {Greeter} from './scripts\\greeter';
import {settings} from './scripts\\settings';
import {HomeController} from './scripts/controllers\\home-controller';
import {LoginModalOpenerController} from './scripts/controllers\\login-modal-opener-controller';
import {LoginModalController} from './scripts/controllers\\login-modal-controller';

/* global AppInit */


// A test
var greeter = new Greeter('Hello, world!');
greeter.greet();

// === DEFINE SETTINGS AND BOOTSTRAP THE APPLICATION ===

/*
|--------------------------------------------------------------------------
| Settings
|--------------------------------------------------------------------------
|
| Set configuration here for diferent scenarios:
| - appverseMobile: when Appverse Mobile is detected
| - mobileBrowser
| - environment: application specific settings.
| Settings defined in more than one scenario are overriden by scenario priority.
| As such, 'environment' settings will override any mobile or default values.
|
*/
AppInit.setConfig(settings);


/*
|--------------------------------------------------------------------------
| Bootstrap the application
|--------------------------------------------------------------------------
|
| The application is bootstrapped with the given settings.
| Manual bootstrapping is used instead of automatic with the ng-app directive
| to let the developer perform preliminar tasks (e.g. async loading setting files
| from a server).
| If the developer uses automatic bootstrap, this call must be removed
| More info: https://docs.angularjs.org/guide/bootstrap
|
*/
AppInit.bootstrap('appverseEs6');



/*
|--------------------------------------------------------------------------
| Create main application module module
|--------------------------------------------------------------------------
*/


var app = angular.module('appverseEs6', ['COMMONAPI', 'ui.bootstrap']);


app.config(($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    });

    $stateProvider.state('land', {
        url: '/'
    });

});


/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

app
    .controller('HomeController', HomeController)
    .controller('LoginModalOpenerController', LoginModalOpenerController)
    .controller('LoginModalController', LoginModalController);









