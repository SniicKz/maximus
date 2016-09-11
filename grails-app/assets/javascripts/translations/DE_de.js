angular.module('streama.translations').config(function ($translateProvider) {
	$translateProvider.translations('de', {
		LOGIN: {
			TITLE: 'Bitte Anmelden',
			USERNAME: 'Nutzername',
			PASSWORD: 'Passwort',
			FIRST_TIME_HINT: 'Das erste mal hier? Versuche \'admin\' for both fields.',
			SUBMIT: 'Login',
		},
		DASHBOARD: {
			TITLE: 'Dashboard',
			NEW_RELEASES: 'Neuerscheinungen',
			CONTINUE_WATCHING: 'Weiterschauen',
			DISCOVER_SHOWS: 'Entdecke Serien',
			DISCOVER_MOVIES: 'Entdecke Filme',
			DISCOVER_OTHER_VIDEOS: 'Entdecke andere videos',
			SORT: 'Sortieren:',
			SEARCH_BY_NAME: 'Search by Name',
			FILTER_BY_TAG: 'Filter by Tag...',
			BROWSE_GENRES: 'Durchsuchen',
			LOOKING_AT_GENRE: 'You\'re looking at the genre:',
			MARK_COMPLETED: 'Als fertig markieren',
			NO_TVSHOWS_FOUND: 'Keine Serien gefunden',
			NO_MOVIES_FOUND: 'Keine Filme gefunden',
		},
		VIDEO: {
			RELEASED: 'Veröffentlicht',
			IMDB: 'IMDB',
			RATING: 'Bewertung',
			VOTES: 'Votes',
			OVERVIEW: 'Überblick',
			GENRE: 'Genre',
			TRAILER: 'Trailer',
			SEASON: 'Season',
		},

		MESSAGES: {
			SHARE_SOCKET: 'By creating a new session you will be redirected back to this player, but this time you will have a unique session ID in the url. Share this with your friends to have a syncronized watching experience with them!',
			FILE_MISSING: 'There is a problem with this content. It seems you removed the associated video file from it.. Share this with your friends to have a syncronized watching experience with them!',
			CODEC_PROBLEM: 'There seems to be a problem adding the video-file to the player. This is most likely due to a codec-problem. Try converting it to a compatible HTML5 codec, remove the currently attached file and re-add it. If the codecs are fine, check the error log of the server and the base URL in the settings.',
			WRONG_BASEPATH: 'You video get\'s included using the wrong Base Path, but you are browsing the page via "{{basePath}}". Make sure you set the correct Base Path in the settings and that you are using it to browse the application.',
		},
		MANAGE_CONTENT: 'Inhalte verwalten',
		ADMIN: 'Admin',
		HELP: 'Hilfe',
		HELP_FAQ: 'Hilfe / FAQ',
		PROFILE_SETTINGS: 'Profil Einstellungen',
		LOGOUT: 'Abmelden',
		CHANGE_PASSWORD: 'Passwort ändern',
		LANGUAGE_en: 'English',
		LANGUAGE_de: 'Deutsch',
		PROFIlE: {
			USERNAME: 'Nutzername',
			FULL_NAME: 'Name',
			LANGUAGE: 'Sprache',
			PAUSE_ON_CLICK: 'Pause Video on Click',
			FAVORITE_GENRES: 'Lieblings Genres',
			SAVE: 'Profil speichern',
			OLD_PASS: 'Altes Passwort',
			NEW_PASS: 'Neues Passwort',
			NEW_PASS_PLACEHOLDER: 'Neues Passwort  (min. 6 Characters)',
			REPEAT_PASS: 'Passwort wiederholen',
			SAVE_PASS: 'Neues Passwort einrichten',
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Zuletzt hinzugefügt',
			OLDEST_ADDED: 'Als erstes hinzugefügt',
			NEWEST_RELEASED: 'Letzte Veröffentlichung',
			OLDEST_RELEASED: 'Älteste Veröffentlichung',
			NEWEST_AIRED: 'Am meisten angesehen',
			OLDEST_AIRED: 'Lange nicht mehr angesehen',
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'Wie lade ich ein Video hoch?',
				TEXT: "You can upload videos by going to Manage Content menu. Choose if you want to upload a Movie, TV show or Other video. Click the relevant sub-menu option" +
				" on the vertical navigation bar on the left side of the screen. You can upload a video by clicking the Create New Movie/TV Show/Other Video button or by typing" +
				" the name of the video you want to upload to the search bar and selecting the relevant movie from search results. After that, you can choose to fill in the video's" +
				" information either manually or loading its information from TheMovieDB. After that, you can upload the video and subtitle files by clicking Manage Files button."
			},
			DELETE_VIDEO: {
				TITLE: 'Wie lösche ich ein Video?',
				TEXT: "You can delete a video by going to the video's information page and clicking Manage Files and selecting the red trash can icon. Clicking Edit Movie and selecting" +
				" Delete Movie is another way to do it. You can also use the File Manager which is in the Manage Content menu. You can see all the files you have uploaded there. Click" +
				" the red trash can icon to delete a file."
			},
			VIDEO_FORMATS: {
				TITLE: 'Welche Video-Formate sind erlaubt?',
				TEXT: "Maximus supports currently only the video file formats supported by HTML5 player. You can test if your video file is HTML5 player compatible by dragging and dropping" +
				" your file to an empty tab on your browser."
			},
			SUBTITLES: {
				TITLE: 'Wie kann ich untertitel hinzufügen?',
				TEXT: "You can add subtitles to videos by clicking Manage Files button which is in the video's information page. You can drag and drop subtitle files there." +
				" Previously you had to manually convert them into a compatible file format, but not anymore! Now the application handles that for you."
			},
			INVITE_USERS: {
				TITLE: 'How can I invite friends to watch my hosted videos?',
				TEXT:"You can share your videos with your friends by inviting them to use your hosted Maximus. Go to the Users menu and click Invite User button. Fill in the invite form and" +
				" select the invitee's role(s). Users with the role Admin can edit Users & Settings. Users with the role Content Manager can edit content. Your friend will be notified about" +
				" the invitation via email. You can also share video sessions with your friends by clicking the video player's Share button and linking the session URL to them."
			},
			BASE_URL: {
				TITLE: "What's the base URL and how should I configure it?",
				TEXT: "The Base-URL is used for the videos and the link in the invitation-email."
			},
			NOTIFICATIONS: {
				TITLE: "What are notifications?",
				TEXT: "You can notify your invited friends about uploaded videos by sending them notification messages. You can send them by adding them your notification queue by clicking" +
				" Add Notification button which is in your video's information page and going to the Notifications menu and clicking Send Queue button."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "Does the video player have shortcut keys?",
				TEXT: "Yes. Pause/unpause: space. Manage volume: arrow keys up or down. Skip video forward/backward: arrow keys left or right. Long skip:" +
				" control + arrow keys left or right. Fullscreen on/off: alt + enter. Subtitles on/off: S, Mute: M, Return to previous" +
				" screen: delete or backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "How do user's favorite genres affect Maximus?",
				TEXT: "Coming soon..."
			},
			USEFUL_LINKS: {
				TITLE: "Useful links",
				TEXT: "Coming soon..."
			},
		}
	});
});

