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
    'audio1': 'teste.ogg',
    'audio2': 'audio/1.m4a',
};

for (var icon in iconAudioMap) {
    document.getElementById(icon).addEventListener('click', function () {
        var audio = new Audio(iconAudioMap[icon]);
        audio.play();
    });
}
