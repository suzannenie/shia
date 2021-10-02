window.onload = function () {
    document.getElementById("disable_button").onclick = buttonClicked;
    var disabled = (localStorage.getItem('disabled') == 'true');
    if (!disabled) {
        document.getElementById("disable_button").innerHTML = 'Disable';
    } else {
        document.getElementById("disable_button").innerHTML = 'Enable';
    }
}

var disabled = false;

function buttonClicked() {
    if (disabled) {
        document.getElementById("disable_button").innerHTML = 'Disable';
    }
    else {
        document.getElementById("disable_button").innerHTML = 'Enable';
    }

    localStorage.setItem('disabled', (!disabled));
    disabled = !disabled;
}
