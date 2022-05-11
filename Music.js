let songs = [
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2001%20%20%20Menu%20Theme.mp4?v=1652291988380',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2002%20%20%20Sewer.mp4?v=1652292017634',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2005%20%20%20Bad%20Vibe.mp4?v=1652292023816',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2003%20%20%20Fallen%20King.mp4?v=1652292024913',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2008%20%20%20Sky%20Blue.mp4?v=1652292025217',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2007%20%20%20Masse.mp4?v=1652292025319',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2004%20%20%20Dreegs%20Theme.mp4?v=1652292025426',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2006%20%20%20Despair.mp4?v=1652292025964',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2009%20%20%20Coronation.mp4?v=1652292027182',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2010%20%20%20Sunrise.mp4?v=1652292200964',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2011%20%20%20At%20First%20Sight.mp4?v=1652292201602',
  'https://cdn.glitch.global/0d238367-dcd8-4953-b22d-81023a5011e2/Jump%20King%20OST%20-%2012%20%20%20A%20Legend%20Lives%20On.mp4?v=1652292201762'
]
var song = false;
var currentSong;
function fade(id){

    // Set the point in playback that fadeout begins. This is for a 2 second fade out.
    var fadePoint = id.currentTime - 2; 

    var fadeAudio = setInterval(function () {

        // Only fade if past the fade out point or not at zero already
        if ((id.currentTime >= fadePoint) && (id.volume != 0.0)) {
            id.volume -= 0.1;
        }
        // When volume at zero stop all the intervalling
        if (id.volume <= 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);

}