function command() {
    let x = document.getElementById('command');
    if (x.value === 'yt'){
      window.location.href = 'https://youtube.com'
    }
    if (x.value === 'vk'){
      window.location.href = 'https://vk.com'
    }
    if (x.value === 'dsc'){
      window.location.href = 'https://discord.com'
    }
    if (x.value === 'discord'){
      window.location.href = 'https://discord.com'
    }
    if (x.value === 'youtube'){
      window.location.href = 'https://youtube.com'
    }
    if (x.value === 'linux'){
      window.location.href = 'https://www.opensuse.org'
    }
    if (x.value === 'worst'){
        window.location.href = 'https://www.opensuse.org'
    }
    if (x.value === 'music'){
        window.location.href = 'https://vanyok.online/music.wav'
    }
    if (x.value === 'tg'){
        window.location.href = 'https://telegram.org'
    }
    if (x.value === 'telegram'){
        window.location.href = 'https://telegram.org'
    }
    if (x.value === 'sc'){
        window.location.href = 'https://soundcloud.com'
    }
    if (x.value === 'soundcloud'){
        window.location.href = 'https://soundcloud.com'
    }
    if (x.value === 'gmail'){
        window.location.href = 'https://gmail.com/'
    }
    if (x.value === 'obs'){
        window.location.href = 'https://obsproject.com'
    }
    if (x.value === 'wf'){
        window.location.href = 'https://www.waifu2x.net/index.ru.html'
    }
    if (x.value === 'rj'){
        window.location.href = 'https://rijin.solutions/'
    }
    if (x.value === 'lb'){
       window.location.href = 'www.lmaobox.net/community'
    }
    if (x.value === 'git'){
       window.location.href = 'https://github.com/'
    }
    if (x.value === 'steamhistory'){
       window.location.href = 'https://steamhistory.net/'
    }
    if (x.value === 'iloveimg'){
       window.location.href = 'https://www.iloveimg.com/crop-image'
    }
  }
  <body>
  <a href="https://youtube.com/playlist?list=PLgjO9pEuiAo5sA2RB5M3740qZyg2_WZGz&si=sMW2DpENFp_H5sT0">NeuroFm</a>
  <button oncllick="gotoLink(this)" value="https://youtube.com/playlist?list=PLgjO9pEuiAo5sA2RB5M3740qZyg2_WZGz&si=sMW2DpENFp_H5sT0">NeuroFm</button>
 
  <scrpit>
    function gotoLink(link){
      console.log(link.value);
      location.href = link.value;
    }
  </scrpit>
  </body>

  function search () {
    let search = document.getElementById('search');
    window.location.href="https://www.startpage.com/do/dsearch?q="+search.value
  }


  function updateClock() {
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = time;
  }
  setInterval(updateClock, 10);