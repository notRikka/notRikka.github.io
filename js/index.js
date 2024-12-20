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




window.onload = function() {
    const landing = document.getElementById('landing');
    const hasVisited = sessionStorage.getItem('hasVisited');
    const commentList = document.getElementById('commentList');


    if (hasVisited === 'true' && landing) {
        landing.style.display = 'none';
    } else {
        sessionStorage.setItem('hasVisited', 'true');
    }


    loadComments();

    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = document.getElementById('comment').value;
        if (commentText) {
            const comments = getCommentsFromStorage();
            comments.push(commentText);
            saveComment(comments);
            document.getElementById('comment').value = ''; 
            loadComments();
        }
    });
};


function loadComments() {
    const commentList = document.getElementById('commentList');
    const comments = getCommentsFromStorage();


    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-item');
        commentElement.innerHTML = `
            <div class="comment-avatar">
                <img src="medias/pics/comment_avatar/default.jpg" alt="用户头像" style="width: 100%; height: 100%; border-radius: 50%;" />
            </div>
            <div class="comment-content">
                <p class="username">访客</p>
                <p>${comment}</p>
                <p class="timestamp">2077/5/31</p>
            </div>
        `;
        commentList.appendChild(commentElement);
    });
}


function getCommentsFromStorage() {
    const storedComments = localStorage.getItem('comments');
    return storedComments ? JSON.parse(storedComments) : [];
}


function saveComment(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

window.addEventListener('scroll', () => {
    const landing = document.getElementById('landing');
    const threshold = 200;
    if (window.scrollY > threshold && landing) {
        landing.style.display = 'none';
    }
});