// pops up every 30 seconds
setInterval(popup, 30000);

function popup() {
    var disabled = (localStorage.getItem('disabled') == 'true');
    if (!disabled) {
        window.open("https://suzannenie.github.io/shia/pop.html")
    }   
}