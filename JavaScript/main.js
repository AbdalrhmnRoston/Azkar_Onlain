







    let ulMenu = document.getElementById('ul-menu');
    let togeelHeader = document.getElementById('toggel-header');

    let logo = document.getElementById('logo');
    let azkarAlspah = document.getElementById('azkar-alspa7');



    let countToggel = 0;

    togeelHeader.onclick = function () {
        countToggel += 1;
        countToggel % 2 === 0 ? ulMenu.className = 'close-ul' : ulMenu.className = 'open-ul';
    };



logo.onclick = function () {
    let landing = document.getElementById('landing');
    azkarAlspah.style.display = 'none';
    landing.style.display = 'block';
}


