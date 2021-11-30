
    let hourss = new Date().getHours();
    let sayHallo = document.querySelector('.landing .text h3');



    let ulMenu = document.getElementById('ul-menu');
    let togeelHeader = document.getElementById('toggel-header');

    // let logo = document.getElementById('logo');
    let azkarAlspah = document.getElementById('azkar-alspa7');



    let countToggel = 0;

    togeelHeader.onclick = function () {
        countToggel += 1;
        countToggel % 2 === 0 ? ulMenu.className = 'close-ul' : ulMenu.className = 'open-ul';
    };


    hourss <= 12 ? sayHallo.innerHTML = 'صباح الخير' : sayHallo.innerHTML= 'مساء الخير';
