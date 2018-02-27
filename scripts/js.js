document.addEventListener('DOMContentLoaded', function() {
	
	var mainWrap = document.getElementById('main');
	var playlist = document.getElementById('playlist');
	var albumPlaylistWrap = document.getElementById('albumPlaylist-wrap');
	var playlistClose = document.querySelector('#playlist .back-btn');

	var playlistItems = [
		[
			"Livin' In A Movie",
			'Dark Fantasy',
			'All of the Lights',
			'So Appalled',
			'Devil in a New Dress',
			'Runaway',
			'Hell of a Life',
			'Blame Game',
			'Lost in the World',
			'Who Will Survive in America',
			'Dark Fantasy',
			'All of the Lights'
		],
		[
			'3:27',
			'5:12',
			'2:54',
			'3:51',
			'4:51',
			'3:46',
			'3:09',
			'7:02',
			'3:37',
			'3:11',
			'3:51',
			'4:51'	
		]
	];

	var playlistBtns = document.querySelectorAll('.playlist-btn'),
		bottomMenuBtn = document.querySelector('#bottom-menu .playlist-btn'),
		sideMenuBtn = document.querySelector('.albums .playlist-btn');
	var playlistExtras = document.getElementById('playlist-extras'),
		playlistExtrasBtn = document.querySelector('.hide-ico');
		
	/* Create & Open/Close created album playlist */
	// Remove playlist item transitions
	function removeTransition() {
		if ( playlist.classList.contains('side-go') || playlist.classList.contains('bottom-go') || 
			playlist.classList.contains('side-back') || playlist.classList.contains('bottom-back') ) {
			playlist.classList.remove('side-go');
			playlist.classList.remove('bottom-go');
			playlist.classList.remove('side-back');
			playlist.classList.remove('bottom-back');
		};
	};

	// Scroll to top of the page smooth
	function animateToTop() {
		var scrollToTop = window.setInterval(function() {
			var pos = window.pageYOffset;
			if (pos > 0) {
				window.scrollTo(0, pos-20);
			} else {
				window.clearInterval(scrollToTop);
			}
		}, 10);
	};

	// Open/close created playlist
	for (var i=0; i < playlistBtns.length; i++) {
		playlistBtns[i].addEventListener('click', function() {
			// create playlist and list items
			var trackList = document.createElement('ul');
			trackList.setAttribute("id", "albumPlaylist");
			for (var i=0; i < playlistItems[0].length; i++) {
				// create html elements
				var track = document.createElement('li');
				var trackLink = document.createElement('a');
				var trackNo = document.createElement('span');
				var trackTitle = document.createElement('span');
				var leadDots = document.createElement('span');
				var trackTime = document.createElement('span');
				// add href attribute
				trackLink.classList.add('link');
				trackLink.setAttribute('href', '#');
				// add order number
				trackNo.innerHTML = i + 1 + '.';
				trackNo.classList.add('track-no');
				// add track title
				trackTitle.innerHTML = playlistItems[0][i].toString();
				trackTitle.classList.add('track-title');
				leadDots.classList.add('lead-dots');
				// add track duration
				for (var j=0; j < playlistItems[1].length; j++) {
					trackTime.innerHTML = playlistItems[1][i].toString();
					trackTime.classList.add('track-time');
				};
				// append tracks to the album playlist
				trackLink.appendChild(trackNo);
				trackLink.appendChild(trackTitle);
				trackLink.appendChild(leadDots);
				trackLink.appendChild(trackTime);
				track.appendChild(trackLink);
				trackList.appendChild(track);
				albumPlaylistWrap.appendChild(trackList);
			};
			// change css
			removeTransition();
			playlist.classList.remove('inactive');
			setTimeout(function() {
				mainWrap.style.overflow = 'visible';
				playlistExtras.classList.add('extras-position');
			}, 500);
			
			if (this === sideMenuBtn) { /* side sliding playlist */
				// when open
				animateToTop();
				playlist.classList.add('side-go');
				// when close
				playlistClose.addEventListener('click', function() {
					removeTransition();
					playlist.classList.add('inactive');
					playlist.classList.add('side-back');
					mainWrap.style.overflow = 'hidden';
					playlistExtras.classList.remove('extras-position');
					// check if extras btn is initial settings, if yes, remove to set it to fixed position
					if (playlistExtras.classList.contains('extras-shuffle-btn')) {
						playlistExtras.classList.remove('extras-shuffle-btn');
					};
					// remove playlist
					setTimeout(function() {
						trackList.remove();
					}, 500);
				});
			} else if (this === bottomMenuBtn) { /* bottom sliding playlist */
				// when open
				animateToTop();
				playlist.classList.add('bottom-go');
				// when close
				playlistClose.addEventListener('click', function() {
					removeTransition();
					playlist.classList.add('inactive');
					playlist.classList.add('bottom-back');
					mainWrap.style.overflow = 'hidden';
					playlistExtras.classList.remove('extras-position');
					// check if extras btn is initial settings, if yes, remove to set it to fixed position
					if (playlistExtras.classList.contains('extras-shuffle-btn')) {
						playlistExtras.classList.remove('extras-shuffle-btn');
					};
					// remove playlist
					setTimeout(function() {
						trackList.remove();
					}, 500);
				});				
			};
		});
	};

	// Playlist Extras item: remove fixed position and move to the bottom of playlist
	playlistExtrasBtn.addEventListener('click', function() {
		playlistExtras.classList.remove('extras-position');
		playlistExtras.classList.add('extras-shuffle-btn');
	});

	// Toggle play buttons
	var play = document.querySelectorAll('.play');
	for (var i=0; i < play.length; i++) {
		play[i].addEventListener('click', function() {
			this.classList.toggle('active');
		});
	};

	/* Polyfill the remove() method in Internet Explorer 9 and higher
	   https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
	*/
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('remove')) {
				return;
			}
			Object.defineProperty(item, 'remove', {
				configurable: true,
				enumerable: true,
				writable: true,
				value: function remove() {
				if (this.parentNode !== null)
					this.parentNode.removeChild(this);
				}
			});
		});
	})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

});
	