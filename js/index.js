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
    const threshold = window.innerHeight;

    // 页面加载时添加active类
    if (content) {
        setTimeout(() => {
            content.classList.add('active');
        }, 100);
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {
            // 滚动超过阈值时
            if (landing) {
                landing.remove(); // 移除 landing
            }
            if (nav) {
                nav.classList.add('fixed'); // 添加固定类
                Object.assign(nav.style, {
                    position: 'fixed',
                    top: '0',
                    width: '100%',
                    zIndex: '1000', // 确保导航栏层级高于其他元素
                });
            }
        } else {
            // 滚动未超过阈值时
            if (nav) {
                nav.classList.remove('fixed'); // 移除固定类
                nav.style.position = ''; // 清空内联样式
                nav.style.top = '';
                nav.style.width = '';
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



window.onload = () => {
    const landing = document.getElementById('landing');
    
    // 检查 sessionStorage 中的状态
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited === 'true' && landing) {
        // 如果是内部跳转，则隐藏 landing
        landing.style.display = 'none';
    } else {
        // 如果是首次访问，则记录状态
        sessionStorage.setItem('hasVisited', 'true');
    }
};

// 滚动事件：隐藏 landing
window.addEventListener('scroll', () => {
    const landing = document.getElementById('landing');
    if (window.scrollY > 1000 && landing) {
        landing.style.display = 'none';
    }
});