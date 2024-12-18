document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const landing = document.getElementById('landing');
    const enterButton = document.getElementById('enterButton');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const nav = document.querySelector('.navigation');
    const sidebar = document.getElementById('sidebar');
    const downwave = document.getElementById('downout');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const clock = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const threshold = window.innerHeight;

    if (content) {
        setTimeout(() => {
            content.classList.add('active');
        }, 100);
    }



    if (downwave) {
        downwave.addEventListener('animationend', () => {
            downwave.style.display = 'none';
            if (video1) {
                video1.play();
                video1.addEventListener('ended', () => {
                    if (video1) video1.style.display = 'none';
                    if (video2) video2.play();
                });
            }
        });
    }


    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {

            if (landing) {
                landing.remove(); 
            }
            if (nav) {
                nav.classList.add('fixed');
                Object.assign(nav.style, {
                    position: 'fixed',
                    top: '0',
                    width: '100%',
                    zIndex: '1000', 
                });
            }
        } else {

            if (nav) {
                nav.classList.remove('fixed');
                nav.style.position = '';
                nav.style.top = '';
                nav.style.width = '';
            }
        }
    });


    if (sidebar && landing) {
        sidebar.style.display = 'block';
    }


    function updateClock() {
        const now = new Date();
        const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const day = days[now.getDay()];
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        if (clock) {
            clock.textContent = `${hours}:${minutes}:${seconds}`;
        }
        if (dateElement) {
            dateElement.textContent = `${year}年${month}月${date}日 ${day}`;
        }
    }


    updateClock();
    setInterval(updateClock, 1000);
});



window.onload = () => {
    const landing = document.getElementById('landing');
    

    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited === 'true' && landing) {

        landing.style.display = 'none';
    } else {

        sessionStorage.setItem('hasVisited', 'true');
    }
};


window.addEventListener('scroll', () => {
    const landing = document.getElementById('landing');
    if (window.scrollY > 1000 && landing) {
        landing.style.display = 'none';
    }
});


