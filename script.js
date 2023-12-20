   let timebar = document.getElementById('timeBar');
   let VolumeBar = document.getElementById('VolumeBar');
   let currentAudio = null;
   let Video = document.getElementById("background-video");
   Video.pause();

let videoList = [
    "./backgroundVideos/train_-_90408 (Original).mp4",
    "./backgroundVideos/154610 (Original).mp4",
    "./backgroundVideos/dj_-_5180 (Original).mp4",
    "./backgroundVideos/music_-_35889 (Original).mp4",
    "./backgroundVideos/vinyl_-_57307 (1080p).mp4",
    "./backgroundVideos/neon_-_21368 (Original)",
    "./backgroundVideos/psychedelic_-_2710 (Original).mp4"
  ];
   let songsList = [
    {
        "id" : "1",
        "src" : "./songs/AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music Video).mp3",
        "name" : "TU HAI KAHAN",
        "singer" : "AUR"
    },
    {
        "id" : "2",
        "src" : "./songs/LONG TIME NO SEE - TAIMOUR BAIG ft. URAAN  Prod. Raffey Anwar (Official Lyrical Video).mp3",
        "name" : "LONG TIME NO SEE",
        "singer" : "TAIMOUR BAIG"
    },
    {
        "id" : "3",
        "src" : "./songs/YAAD - Asim Azhar  Talha Anjum  Talhah Yunus (Official Music Video).mp3",
        "name" : "YAAD",
        "singer" : "Talha Anjum"
    },
    {
        "id" : "4",
        "src" : "./songs/Top Flame _ Jerry (Official Music Video).mp3",
        "name" : "Top Flame",
        "singer" : "Jerry"
    },
    {
        "id" : "5",
        "src" : "./songs/Kaley Sheshe  Addy Nagar  Official Video  @AddyNagar.mp3",
        "name" : "Kale Sheshe",
        "singer" : "Addy Nagar"
    },
    {
        "id" : "6",
        "src" : "./songs/Maharani (feat. Arpit Bala, ReVo LEKHAK).mp3",
        "name" : "Maharani",
        "singer" : "Arpit Bala"
    },
    {
        "id" : "7",
        "src" : "./songs/WuShang Clan feat. @DankRishu.mp3",
        "name" : "WuShang Clan",
        "singer" : "DankRishu"
    },
    {
        "id" : "8",
        "src" : "./songs/INTRODUCTION - FARIS SHAFI.mp3",
        "name" : "INTRODUCTION",
        "singer" : "Faris Shafi"
    },
    {
        "id" : "9",
        "src" : "./songs/Tochan.mp3",
        "name" : "Tochan",
        "singer" : "Sidhu Moosewala"
    },
    {
        "id" : "10",
        "src" : "./songs/@Talwiinder    Khayaal  NDS  Official Music Video  Viral Song.mp3",
        "name" : "Khayaal",
        "singer" : "Talwiinder"
    },
    {
        "id" : "11",
        "src" : "./songs/King - Tu Aake Dekhle  The Carnival  The Last Ride  Prod. by Shahbeatz  Latest Hit Songs 2020.mp3",
        "name" : "Tu Aake Dekhle",
        "singer" : "King"
    },
    {
        "id" : "12",
        "src" : "./songs/Talha Anjum - Two Tone  Prod. by Umair (Official Audio).mp3",
        "name" : "Two Tone",
        "singer" : "Talha Anjum"
    },
    {
        "id" : "13",
        "src" : "./songs/KR$NA - NO CAP (OFFICIAL VIDEO)  KALAMKAAR.mp3",
        "name" : "NO CAP",
        "singer" : "Krishna"
    },
    {
        "id" : "14",
        "src" : "./songs/KR$NA - Prarthana  Prod. Bharg  Far From Over EP.mp3",
        "name" : "Prarthana",
        "singer" : "Krishna"
    },
    {
        "id" : "15",
        "src" : "./songs/QUARANTINE - Young Stunners  Talha Anjum x Talhah Yunus x KR$NA (Official Music Video).mp3",
        "name" : "QUARANTINE",
        "singer" : "Talha Anjum"
    },
    {
        "id" : "16",
        "src" : "./songs/DIVINE - 3_59 AM  Prod. by Stunnah Beatz  Official Music Video.mp3",
        "name" : "3:59 AM",
        "singer" : "Divine"
    },
    {
        "id" : "17",
        "src" : "./songs/Teri Deewani - Kailash Kher  Official Video  Kailasa  Paresh  Naresh.mp3",
        "name" : "Teri Deewani",
        "singer" : "Kailash Kher"
    },
    {
        "id" : "18",
        "src" : "./songs/Abdul Hannan & Rovalio - Iraaday (Official Music Video).mp3",
        "name" : "Iraaday",
        "singer" : "Abdul Hannan"
    },
    {
        "id" : "19",
        "src" : "./songs/AFKAP - AAINA  Official Animated Video.mp3",
        "name" : "AAINA",
        "singer" : "AFKAP"
    },
    {
        "id" : "20",
        "src" : "./songs/Babam Bam - Kailash KherOfficial VideoKailasa Jhoomo ReKailasaParesh,Naresh.mp3",
        "name" : "Bagad Bum Babam",
        "singer" : "Kailash Kher"
    },
    {
        "id" : "21",
        "src" : "./songs/Hass Hass (Official Video) Diljit X Sia.mp3",
        "name" : "Hass Hass",
        "singer" : "Diljit Doshanjh"
    },
    {
        "id" : "22",
        "src" : "./songs/Anuv Jain - ALAG AASMAAN (a song on the ukulele).mp3",
        "name" : "Alag Aasmaan",
        "singer" : "Anuv Jain"
    },
    {
        "id" : "23",
        "src" : "./songs/Saiyyan - Kailash Kher Paresh Kamath Naresh Kamath  Jhoomo Re.mp3",
        "name" : "Saiyan",
        "singer" : "Kailash Kher"
    },
    {
        "id" : "24",
        "src" : "./songs/Diljit Dosanjh_ Lalkaara (Video) Feat. Sultaan  GHOST  Intense, Raj Ranjodh.mp3",
        "name" : "Lalkaara",
        "singer" : "Diljit Doshanjh"
    },
    {
        "id" : "25",
        "src" : "./songs/Mann (Official Music Video)- The Yellow Diary ft. @tarinishah @moseskoul   Love song 2023.mp3",
        "name" : "Mann",
        "singer" : "Yellow Diary"
    },
    {
        "id" : "26",
        "src" : "./songs/The Local Train - Aaftaab (Official Audio).mp3",
        "name" : "The Local Train",
        "singer" : "Aaftaab"
    },
    {
        "id" : "27",
        "src" : "./songs/Central Cee - Loading [Music Video]  GRM Daily.mp3",
        "name" : "Central Cee.Loading",
        "singer" : "Central Cee"
    },
    {
        "id" : "28",
        "src" : "./songs/Sucker for Pain (with Logic, Ty Dolla $ign & X Ambassadors).mp3",
        "name" : "Sucker for pain",
        "singer" : "lil wayne"
    },
    {
        "id" : "29",
        "src" : "./songs/Tion Wayne x Russ Millions - Body 2 ft Arrdee, 3x3E1 & ZT, Bugzy Malone, Fivio Foreign, Darkoo, Buni.mp3",
        "name" : "Tion Wayne.Body 2",
        "singer" : "Tion wayne"
    },
    {
        "id" : "30",
        "src" : "./songs/XXXTENTACION x MC STAN -  Everybody Dies In Their Nightmares, Astaghfirullah (Music Video).mp3",
        "name" : "Everybody Dies In Their Nightmares",
        "singer" : "XXXTENTACTION"
    },
    {
        "id" : "31",
        "src" : "./songs/Mylo - Daku X G Code (Prod. By Saj Cobra) - Official Music Video - Gutterlife Records.mp3",
        "name" : "Daku X G Code",
        "singer" : "Daku"
    },
    {
        "id" : "32",
        "src" : "./songs/DIVINE - Gandhi Money  Official Music Video (Prod. by Phenom).mp3",
        "name" : "Gandhi Money",
        "singer" : "Divine"
    },
    {
        "id" : "33",
        "src" : "./songs/Kaleshi Chori (Video) Pranjal Dahiya  DG IMMORTALS, Raga, Harjas, VirtualAF, Sshiv  Deepesh Goyal.mp3",
        "name" : "Kaleshi Chhori",
        "singer" : "Raga"
    },
    {
        "id" : "34",
        "src" : "./songs/DIVINE  Chal Bombay  Official Music Video.mp3",
        "name" : "Chal Bombay",
        "singer" : "Divine"
    },
    {
        "id" : "35",
        "src" : "./songs/KARMA x Sez on the Beat - Duniya Makkaar (Audio).mp3",
        "name" : "Duniya Makkar",
        "singer" : "Karma"
    }
]

function searchSongs() {
    let userInputText = document.getElementById('textSearch').value.toLowerCase();
    let playpauseicon = document.getElementById('playpause');
    let playButton = document.getElementById("playButton");

        
        let filteredSongs = songsList.filter(song => {
        let isTextMatch = song.name.toLowerCase().includes(userInputText) ||
                          song.singer.toLocaleLowerCase().includes(userInputText);

        return isTextMatch;
    });

    // Use filteredSongs as needed
    currentAudio = null;
    timebar.value = 0;
    Video.pause();
    playpauseicon.classList.remove('fa-pause');
    playpauseicon.classList.add('fa-play');
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
    displaySongs(filteredSongs);
}

async function playSong(a) {
    if (currentAudio !== null && currentAudio !== a) {
    Video.src = videoList[Math.floor(Math.random()*videoList.length)];
    let audio = document.getElementById(`song${currentAudio}`);
    let playIcon = document.getElementById(`Song${currentAudio}`);
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    audio.currentTime = 0;
    timebar.value = 0;
    audio.pause();
    }

    let playpauseicon = document.getElementById('playpause');
    let audio = document.getElementById(`song${a}`);
    let playIcon = document.getElementById(`Song${a}`);
    let playButton = document.getElementById("playButton");

    if (audio.paused) {
        Video.play();
        document.getElementById("songName").innerHTML = document.getElementById(`songId${a}`).innerText;
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
    playpauseicon.classList.remove('fa-play');
    playpauseicon.classList.add('fa-pause');
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        audio.currentTime = 0;
        timebar.value = 0;
        audio.play();
    } else {
        Video.pause();
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
    playpauseicon.classList.remove('fa-pause');
    playpauseicon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        audio.currentTime = 0;
        timebar.value = 0;
        audio.pause();
    }

    audio.removeEventListener('timeupdate', updateProgressBar);
    timebar.removeEventListener('click', seek);
    
    audio.addEventListener('timeupdate',()=>{
         updateProgressBar()
    });

    timebar.addEventListener('click', function(e){
        seek(e)
    });

    function updateProgressBar() {
        let value = (audio.currentTime / audio.duration) * 100;
        timebar.value = value;
    }
    
    function seek(e) {
        let percent = e.offsetX / timebar.offsetWidth;
        audio.currentTime = (percent * audio.duration);
    }   

    currentAudio = a;

    let nextSongVolume = document.getElementById(`song${a}`);
    nextSongVolume.volume = VolumeBar.value;

}

function PlayPause() {
    if(currentAudio==null){
        playSong('1');
    }
    let playButton = document.getElementById('playButton');
    let playpauseicon = document.getElementById('playpause');
    let audio = document.getElementById(`song${currentAudio}`);
    let playIcon = document.getElementById(`Song${currentAudio}`);

    if (audio.paused) {
        Video.play();
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
        playpauseicon.classList.remove('fa-play');
        playpauseicon.classList.add('fa-pause');
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        audio.play();
    } else {
        Video.pause();
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
        playpauseicon.classList.remove('fa-pause');
        playpauseicon.classList.add('fa-play');
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        audio.pause();
    }
}

function PlayPause1(audio) {
    let playIcon = document.getElementById(`Song${currentAudio}`);
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        audio.pause();
        document.getElementById("songName").innerHTML = document.getElementById(`songId${currentAudio}`).innerText;
    audio.currentTime=0;
    timebar.value=0;
}

function nextSong() {
    let audio = document.getElementById(`song${currentAudio}`);

     PlayPause1(audio);

    let currentAudioNum = parseInt(currentAudio);
    if (currentAudioNum < songsList.length) {
        currentAudio = (currentAudioNum + 1).toString();
        playSong(currentAudio);
    } else {
        currentAudio = '1'
        playSong(currentAudio);
    }
}

function prevSong() {
    let audio = document.getElementById(`song${currentAudio}`);

    PlayPause1(audio);

    let currentAudioNum = parseInt(currentAudio);
    if (currentAudioNum > 1) {
        currentAudio = (currentAudioNum - 1).toString();
        playSong(currentAudio);
    } else {
        currentAudio = (songsList.length).toString();
        playSong(currentAudio);
    }
}

function updateVolumeFromBar() {
    let audio = document.getElementById(`song${currentAudio}`);
    audio.volume = VolumeBar.value;
  }


  function displaySongs(song) {
    let songContainer = document.getElementById('songContainer');

    songContainer.innerHTML = '';
  
    song.forEach(song => {
      let songElement = document.createElement('div');
      songElement.id = song.id;
      songElement.classList.add('song-card');
      songElement.innerHTML =
      `<div onclick="playSong('${song.id}')" id= "songId${song.id}"><audio id="song${song.id}" src="${song.src}" onended="nextSong()"></audio>${song.id}.${song.name}<i id="Song${song.id}" class="fa-solid fa-play" style="margin-left: 10px;"></i></li>`;

      songContainer.appendChild(songElement);
    });
  }

  displaySongs(songsList);