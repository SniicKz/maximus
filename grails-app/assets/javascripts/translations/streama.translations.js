angular.module('streama.translations', ['pascalprecht.translate'])
	.config(function ($translateProvider) {
		$translateProvider.determinePreferredLanguage();
		$translateProvider.fallbackLanguage('de');
	})

	.run(function ($rootScope) {
	$rootScope.availableLanguages = ['de'];
	});

