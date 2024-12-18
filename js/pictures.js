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
});



document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.querySelector('.page-content');
    pageContent.classList.add('active'); // 入场动画触发
});

window.addEventListener('beforeunload', (event) => {
    const pageContent = document.querySelector('.page-content');
    pageContent.classList.add('exit'); // 出场动画触发

    // 延迟页面跳转，确保动画完成
    event.preventDefault();
    setTimeout(() => {
        window.location.href = event.target.URL || '/';
    }, 1000); // 动画持续时间
});


