// pops up every 30 seconds
setInterval(popup, 30000);

function popup() {
    var disabled = (localStorage.getItem('disabled') == 'true');
    if (!disabled) {
        window.open("https://suzannenie.github.io/shia/pop.html")
    }   
}

async function createNotif(q)
{
    if (Notification.permission === 'granted')
    {
        let notif = new Notification(
            q['text'],
            {
            'icon':q['image']
            }
        );

        setTimeout(() => notif.close(), 3 * 1000); //3 Seconds
    } else {
        let perms = await Notification.requestPermission();
    }
    
}

function localTimeIfAvail(name)
{
    if (localStorage.getItem(name) != null)
    {
        return parseInt(localStorage.getItem(name));
    }
    return 0;
}

function webTimer() 
{
    let sec = localTimeIfAvail("sec");
    let min = localTimeIfAvail("min");
    let hr = localTimeIfAvail("hr");
    
    sec = sec + 1;
    if (sec == 60)
    {
        min = min + 1;
        sec = 0;
    }

    if (min == 60)
    {
        hr = sec + 1;
        min = 0;
    }

    localStorage.setItem("hr", hr);
    localStorage.setItem("min",min);
    localStorage.setItem("sec",sec);
    

}

function updateTimer()
{
    localStorage.setItem("stopwatch", webTimer);
}
setInterval(webTimer, 1000);