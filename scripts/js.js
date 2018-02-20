document.addEventListener('DOMContentLoaded', function() {

	var playlist = document.getElementById('playlist');
	var albumPlaylistWrap = document.getElementById('albumPlaylist-wrap');
	var playlistClose = document.querySelector('.back-btn');

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

	var playlistBtns = document.querySelectorAll('.playlist-btn');
	var bottomMenuBtn = document.querySelector('#bottom-menu .playlist-btn');
	var sideMenuBtn = document.querySelector('.albums .playlist-btn');
	
	/* Create & Open/Colse created album playlist */
	function removeTransition() {
		if ( playlist.classList.contains('side-go') || playlist.classList.contains('bottom-go') || 
			playlist.classList.contains('side-back') || playlist.classList.contains('bottom-back') ) {
			playlist.classList.remove('side-go');
			playlist.classList.remove('bottom-go');
			playlist.classList.remove('side-back');
			playlist.classList.remove('bottom-back');
		}
	};

	for (var i=0; i < playlistBtns.length; i++) {
		playlistBtns[i].addEventListener('click', function() {
			
			// create list item for playlist
			var trackList = document.createElement('ul');
			trackList.setAttribute("id", "albumPlaylist");
			for (var i=0; i < playlistItems[0].length; i++) {
				// create html elements
				var track = document.createElement('li');
				var trackNo = document.createElement('span');
				var trackTitle = document.createElement('span');
				var leadDots = document.createElement('span');
				var trackTime = document.createElement('span');
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
				track.appendChild(trackNo);
				track.appendChild(trackTitle);
				track.appendChild(leadDots);
				track.appendChild(trackTime);
				trackList.appendChild(track);
				albumPlaylistWrap.appendChild(trackList)
			};

			// Open/Close created playlist
			var albumPlaylist = document.getElementById('albumPlaylist');
			removeTransition();
			playlist.classList.remove('inactive');

			if (this === sideMenuBtn) { /* side sliding playlist */
				// open
				playlist.classList.add('side-go');
				// close
				playlistClose.addEventListener('click', function() {
					removeTransition();
					playlist.classList.add('inactive');
					playlist.classList.add('side-back');
					// remove list item
					trackList.remove();
				});
			} else if (this === bottomMenuBtn) { /* bottom sliding playlist */
				// open
				playlist.classList.add('bottom-go');
				// close
				playlistClose.addEventListener('click', function() {
					removeTransition();
					playlist.classList.add('inactive');
					playlist.classList.add('bottom-back');
					// remove list item
					trackList.remove();
				});				
			};
			
		});
	};

	var play = document.querySelectorAll('.play');
	// Toggle play buttons
	for (var i=0; i < play.length; i++) {
		play[i].addEventListener('click', function() {
			this.classList.toggle('active');
		});
	};

});
