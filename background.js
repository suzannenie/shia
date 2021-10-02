// pops up every 30 seconds
setInterval(popup, 30000);

function popup() {
    if (!localStorage.getItem('disabled')) {
        alert('Wassup');
    }   
}