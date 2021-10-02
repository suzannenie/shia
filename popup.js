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

function localTimeIfAvail(name)
{
    if (localStorage.getItem(name) != null)
    {
        return localStorage.getItem(name);
    }
    return 0;
}


function resetTimer()
{
    sec = 0;
    min = 0;
    hr = 0;

    localStorage.setItem("hr", hr);
    localStorage.setItem("min",min);
    localStorage.setItem("sec",sec);
    
}

function genTimeText()
{
    let sec = localTimeIfAvail("sec");
    let min = localTimeIfAvail("min");
    let hr = localTimeIfAvail("hr");

    if (hr == 0)
    {
        if (min == 0)
        {
            return sec  + " seconds";
        } else {
            if (sec < 10)
            {
                sec = "0" + sec;
            }
            return min + ":" + sec  + " seconds";
        }
        
    }
    if (min < 10)
    {
        min = "0" + min;
    }

    return hr + ":" + min + ":" + sec + " seconds";
}

function updateTimeText()
{
    document.getElementById("kronos").textContent = genTimeText();
}

setInterval(updateTimeText, 1000);
