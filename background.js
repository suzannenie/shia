// pops up every 30 seconds
setInterval(popup, 5000);

function popup() {
    var disabled = (localStorage.getItem('disabled') == 'true');
    if (!disabled) {
        alert('Wassup');
    }   
}