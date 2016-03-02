/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function(){


  var playlist = [{
      title:"Need You Now",
      artist:"Lady Antebellum",
      mp3:"http://www.scarlettbai.com/music/needyounow.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "http://www.scarlettbai.com/images/needyounow.jpg"
    },{
      title:"Dreamer",
      artist:"Sophie Zelmani",
      mp3:"http://www.scarlettbai.com/music/dreamer.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "http://www.scarlettbai.com/images/dreamer.jpg"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});