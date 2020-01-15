// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
// YouTubeの埋め込み
var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'youtubePlayer', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'iy6gUYpyGQI', // YouTubeのID
	  playerVars: {
        loop: 1, // ループの設定
		playlist: 'I24azAvtwu8',
		
	  }
	  
    }
  );
}



// 再生
//var ytPlay = document.getElementById('play');
//ytPlay.addEventListener('click', function() {
//	ytPlayer.playVideo();
//});

// 一時停止
var ytPause = document.getElementById('pause');
ytPause.addEventListener('click', function() {
	ytPlayer.pauseVideo();
});

// 停止
var ytStop = document.getElementById('stop');
ytStop.addEventListener('click', function() {
	ytPlayer.pauseVideo().seekTo(0);
});

// 戻る
var ytPrevious = document.getElementById('previous');
ytPrevious.addEventListener('click', function() {
	ytPlayer.previousVideo().seekTo(0);
});

// 次へ
var ytNext = document.getElementById('next');
ytNext.addEventListener('click', function() {
	ytPlayer.nextVideo().seekTo(0);
});

