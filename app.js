var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var info = document.getElementById('info');



setInterval(()=>{
    date = new Date();

    d = date.getDate();
    

    info.textContent = `${d}`;

    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    

    hrotation = 30 * htime + mtime/2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;


    hour.style.transform = `rotate(${hrotation}deg)`;
    
    minute.style.transform = `rotate(${mrotation}deg)`;
    
    second.style.transform = `rotate(${srotation}deg)`;




},1000);
