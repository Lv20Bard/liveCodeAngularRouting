angular.module('livecode').controller('LoginController', function($scope, Auth, AuthLogged) {

	$scope.isLoggedIn = AuthLogged;

	$scope.loginWithFacebook = function() {
		
		// login with Facebook
		Auth.loginWithFacebook().then(function(firebaseUser) {
			$scope.isLoggedIn = true;
			console.log("Signed in as:", firebaseUser.user.displayName);
			console.log(firebaseUser);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};
});




















