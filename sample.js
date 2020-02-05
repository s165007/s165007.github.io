//
// Sample for YouTube Player API
//
// 参考
// [1] YouTubeプレーヤーAPIでプレーヤーに別の動画を読み込む
// http://cly7796.net/wp/javascript/load-another-video-to-the-player-with-the-youtube-player-api/
//
// [2] YouTube > IFrame Player API
// https://developers.google.com/youtube/iframe_api_reference?hl=ja#Examples
//

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
var ytPlayer;
var ytArea = 'sample';
var ytID = '-YVxZNzJlS0';

var list_a = ['RkIOd78C82I', 'Eze6-eHmtJg', 'algaC2jhu8s', '-l5yolGZox4', '51CH3dPaWXc'];
var list_b = ['ztdpBUDf00o', '0xSiBpUdW4E', 'EQva8xKAZ7s', 'pfGI91CFtRg', 'ViG28OU9crI'];
var list_c = ['9osrk5jXCUY', 'fpjIsylnvU8', 'NyvSSVCABdk', '6VbrbcXp3Fc', '9a1TGxE3meg'];

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(ytArea, {
        videoId: ytID,
        playerVars: {
            loop: 1, // ループの設定
            playlist: 'I24azAvtwu8',
            playsinline: 1
          }
    });
}

//
// array -> playlist
//
document.getElementById('set_list_a').addEventListener('click', function() {    
    ytPlayer.cuePlaylist(list_a);
}, false);

document.getElementById('set_list_b').addEventListener('click', function() {    
    ytPlayer.cuePlaylist(list_b);
}, false);

document.getElementById('set_list_c').addEventListener('click', function() {    
    ytPlayer.cuePlaylist(list_c);
}, false);

//
// next
//
document.getElementById('play_next_song').addEventListener('click', function() {    
    ytPlayer.nextVideo();
}, false);
