let section = document.querySelector('section'),
icon = document.querySelector(".icon");

icon.onclick = ()=>{
    section.classList.toggle("dark");
}

setInterval(()=>{
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let i ;
    i= hour <12 ? 'AM':'PM';
    hour = hour > 12 ?hour-12 :hour;
    hour = hour == 0 ? hour==12 : hour;

    hour = hour<10 ? '0'+hour : hour;
    min = min<10 ? '0'+min : min ;
    sec = sec<10 ? '0'+sec : sec ;

    document.querySelector(".hour-num").innerText = hour;
    document.querySelector(".min-num").innerText = min;
    document.querySelector(".sec-num").innerText = sec;
    document.querySelector(".am-pm").innerText = i;


},1000);