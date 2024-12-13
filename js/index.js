document.addEventListener('DOMContentLoaded', () => {
    // 获取元素
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

    // 页面加载时添加active类
    if (content) {
        setTimeout(() => {
            content.classList.add('active');
        }, 100);
    }

    // 进入网站函数
    function enterSite() {
        if (landing) {
            landing.classList.add('slide-out');
        }
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    // 点击进入按钮或滚动指示器时执行进入网站
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', enterSite);
    }

    if (enterButton) {
        enterButton.addEventListener('click', (e) => {
            e.preventDefault();
            enterSite();
        });
    }

    // downwave动画结束时，播放视频
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

    // 滚动时固定导航栏
    const threshold = window.innerHeight;
    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {
            if (nav) {
                nav.classList.add('fixed');
            }
            if (landing) {
                landing.remove();
            }
            if (nav) {
                nav.style.position = 'fixed';
                nav.style.top = '0';
                nav.style.width = '100%';
            }
        } else {
            if (nav) {
                nav.classList.remove('fixed');
            }
        }
    });

    // 在主页显示侧边栏
    if (sidebar && landing) {
        sidebar.style.display = 'block';
    }

    // 更新时间和日期
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

    // 立即更新时间并每秒更新一次
    updateClock();
    setInterval(updateClock, 1000);
});
