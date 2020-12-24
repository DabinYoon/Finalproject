let musics = [
	new Audio("All For Christmas.mp3"),
	new Audio("Christmas In My Heart.mp3"),
	new Audio("Magic Day.mp3"),
	new Audio("Saint Nick.mp3")
]

function playMusic(index) {
	let music = musics[index]
	if (music.playbackRate != 1) {
		music.playbackRate = 1;
	} else if (!music.paused) {
		music.pause();
	} else {
		music.play();
		for (let m of musics) {
			if (m == music)
				continue

			if (!m.paused) {
				m.pause();
			}
		}	
	}
}

function rewind(index) {
	let music = musics[index]
	if (!music.paused) {
		music.currentTime -= 1.5;
	}
}

function forward(index) {
    let music = musics[index]
	if (!music.paused) {
		music.playbackRate *= 1.5;
	}
}
