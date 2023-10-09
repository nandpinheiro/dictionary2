//SCROOL SMOOTH (ROLAGEM SUAVE)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 130;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


//FUNÇÃO PARA REPRODUÇÃO DOS ÁUDIOS
var iconAudioMap = {
    'audio1': 'audio/1.m4a',
    'audio2': 'audio/2.m4a',
    'audio3': 'audio/3.m4a',
    'audio4': 'audio/4.m4a',
    'audio5': 'audio/5.m4a',
    'audio6': 'audio/6.m4a',
    'audio7': 'audio/7.m4a',
    'audio8': 'audio/8.m4a',
    'audio9': 'audio/9.m4a',
    'audio10': 'audio/10.m4a',
    'audio11': 'audio/11.m4a',
    'audio13': 'audio/13.m4a',
    'audio14': 'audio/14.m4a',
    'audio15': 'audio/15.m4a',
    'audio16': 'audio/16.m4a',
    'audio17': 'audio/17.m4a',
    'audio18': 'audio/18.m4a',
    'audio19': 'audio/19.m4a',
    'audio20': 'audio/20.m4a',
    'audio21': 'audio/21.m4a',
    'audio22': 'audio/22.m4a',
    'audio23': 'audio/23.m4a',
    'audio24': 'audio/24.m4a',
    'audio25': 'audio/25.m4a',
    'audio26': 'audio/26.m4a',
    'audio27': 'audio/27.m4a',
    'audio28': 'audio/28.m4a',
    'audio29': 'audio/29.m4a',
    'audio30': 'audio/30.m4a',
    'audio31': 'audio/31.m4a',
    'audio32': 'audio/32.m4a',
    'audio33': 'audio/33.m4a',
    'audio34': 'audio/34.m4a',
    'audio35': 'audio/35.m4a',
    'audio36': 'audio/36.m4a',
    'audio37': 'audio/37.m4a',
    'audio38': 'audio/38.m4a',
    'audio39': 'audio/39.m4a',
    'audio40': 'audio/40.m4a',
    'audio41': 'audio/41.m4a',
    'audio42': 'audio/42.m4a',
    'audio43': 'audio/43.m4a',
    'audio44': 'audio/44.m4a',
    'audio45': 'audio/45.m4a',
    'audio46': 'audio/46.m4a',
    'audio47': 'audio/47.m4a',
    'audio48': 'audio/48.m4a',
    'audio49': 'audio/49.m4a',
    'audio50': 'audio/50.m4a',
    'audio51': 'audio/51.m4a',
    'audio52': 'audio/52.m4a'
};

for (var icon in iconAudioMap) {
    if (iconAudioMap.hasOwnProperty(icon)) {
        (function (icon) {
            document.getElementById(icon).addEventListener('click', function () {
                var audio = new Audio(iconAudioMap[icon]);
                audio.play();
            });
        })(icon);
    }
}
