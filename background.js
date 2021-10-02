// pops up every 30 seconds
setInterval(popup, 5000);

function popup() {
    var disabled = (localStorage.getItem('disabled') == 'true');
    if (!disabled) {
        window.open("https://github.io/suzannenie/shia/pop.html")
    }   
}