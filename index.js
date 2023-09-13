setInterval(() => {

    let d = new Date();
    htimes = d.getHours();
    mtimes = d.getMinutes();
    stimes = d.getSeconds();  

    hrotaion  = 30 * htimes + mtimes / 2;
    mrotaion = 60 * mtimes;
    srotaion = 6 * stimes;

    hour.style.transform = `rotate(${hrotaion}deg)`;
    second.style.transform = `rotate(${srotaion}deg)`;
    minute.style.transform = `rotate(${mrotaion}deg)`;
}, 1000);   