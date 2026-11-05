window.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'F12') {
        e.preventDefault();
        var divImagen = document.getElementById('imagen');
        divImagen.style.backgroundImage = "url('https://picsum.photos/1920/1080?random=" + Date.now() + "')";
    }
});