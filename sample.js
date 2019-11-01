// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
// YouTubeの埋め込み
var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'sample', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'M7lc1UVf-VE', // YouTubeのID
	  playerVars: {
        loop: 1, // ループの設定
		playlist: 'I24azAvtwu8',
		playsinline: 1
	  }
	  
    }
  );
}

// 蜀咲函
var ytPlay = document.getElementById('play');
ytPlay.addEventListener('click', function() {
	ytPlayer.playVideo();
});

// 荳譎ょ●豁｢
var ytPause = document.getElementById('pause');
ytPause.addEventListener('click', function() {
	ytPlayer.pauseVideo();
});

// 蛛懈ｭ｢
var ytStop = document.getElementById('stop');
ytStop.addEventListener('click', function() {
	ytPlayer.pauseVideo().seekTo(0);
});

var ytPrevious = document.getElementById('previous');
ytPrevious.addEventListener('click', function() {
	ytPlayer.previousVideo().seekTo(0);
});

var ytNext = document.getElementById('next');
ytNext.addEventListener('click', function() {
	ytPlayer.nextVideo().seekTo(0);
});

// 髻ｳ驥上い繝��(+10)
var ytVolup = document.getElementById('volup');
ytVolup.addEventListener('click', function() {
	// 迴ｾ蝨ｨ縺ｮ髻ｳ驥丞叙蠕
	var currentVol = ytPlayer.getVolume();
	ytPlayer.setVolume(currentVol + 10);
});

// 髻ｳ驥上ム繧ｦ繝ｳ(-10)
var ytVoldown = document.getElementById('voldown');
ytVoldown.addEventListener('click', function() {
	// 迴ｾ蝨ｨ縺ｮ髻ｳ驥丞叙蠕
	var currentVol = ytPlayer.getVolume();
	ytPlayer.setVolume(currentVol - 10);
});

// 繝溘Η繝ｼ繝
var ytMute = document.getElementById('mute');
ytMute.addEventListener('click', function() {
	// 繝溘Η繝ｼ繝医＆繧後※縺�ｋ縺九←縺�°
	if(ytPlayer.isMuted()) {
		// 繝溘Η繝ｼ繝医�隗｣髯､
		ytPlayer.unMute();
	} else {
		// 繝溘Η繝ｼ繝
		ytPlayer.mute();
	}
});
