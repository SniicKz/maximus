angular.module('streama.translations', ['pascalprecht.translate'])
	.config(function ($translateProvider) {
		$translateProvider.preferredLanguage('de');
	})

	.run(function ($rootScope) {
	$rootScope.availableLanguages = ['en', 'de'];
	});

