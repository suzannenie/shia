window.onload = function () {
    document.getElementById("disable_button").onclick = buttonClicked;
    var disabled = (localStorage.getItem('disabled') == 'true');
    if (!disabled) {
        document.getElementById("disable_button").innerHTML = 'Disable';
    } else {
        document.getElementById("disable_button").innerHTML = 'Enable';
    }
    document.getElementById("reset").onclick = resetTimer;
    stylize();
}

let bkg = ["#9FB4C7","#9CC4B2","#E4572E","#F3A712","#A8C686","#ffb703","#56cfe1","#006d77","#d62828"];

function stylize()
{
    var bd = document.getElementById("body");
    bd.style.backgroundColor = getBkg();
}

var disabled = false;

function rng(max)
{
    return Math.floor(Math.random() * max);
}

function randElem(array)
{
    let i = rng(array.length);
    return array[i];
}

function getBkg()
{
    return randElem(bkg);
}

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

let sec = 0;
let min = 0;
let hr = 0;
function webTimer() 
{
    sec = sec + 1;
    if (sec == 60)
    {
        min = min + 1;
        sec = 0;
    }

    if (min == 60)
    {
        hr = hr + 1;
        min = 0;
    }

    
    
    if (hr == 0)
    {
        if (min == 0)
        {
            return sec  + " seconds";
        } else {
            if (sec < 10)
            {
                secText = "0" + sec;
            }
            return min + ":" + secText  + " seconds";
        }
        
    }
    if (min < 10)
    {
        minText = "0" + sec;
    }
    return hr + ":" + minText + ":" + secText + " seconds";
    

}

function resetTimer()
{
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("kronos").textContent = "0 seconds";
}

function updateTimeText()
{
    document.getElementById("kronos").textContent = webTimer();
}

setInterval(updateTimeText, 1000);
