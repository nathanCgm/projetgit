document.addEventListener('mousemove', function(e) {
    var trail = document.getElementById('trail');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    trail.style.opacity = 1;

    setTimeout(function() {
        trail.style.opacity = 0;
    }, 300);
});
