document.addEventListener('DOMContentLoaded', function() {

	var playlist = document.getElementById('playlist');
	var albumPlaylist = document.getElementById('albumPlaylist');
	var playlistSideBtn = document.getElementById('album-playlist-side-btn');
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

	// Show album playlist
	playlistSideBtn.addEventListener('click', function() {
		playlist.classList.remove('hide-item');
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
			albumPlaylist.appendChild(track);
		};
	});

	// Hide album playlist
	playlistClose.addEventListener('click', function() {
		playlist.classList.add('hide-item');
	});

	var play = document.querySelectorAll('.play');
	// Toggle play buttons
	for (var i=0; i < play.length; i++) {
		play[i].addEventListener('click', function() {
			this.classList.toggle('active');
		});
	};
	
});
