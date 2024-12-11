 // 调整图片的大小和占位
 function adjustImageSize(img) {
    const aspectRatio = img.naturalWidth / img.naturalHeight; // 获取图片的宽高比
    const container = img.parentElement;

    // 计算图片的纵横比，决定它占用多少行或列
    if (aspectRatio < 1) { 
        // 如果图片高比宽大，给它更多的行
        container.style.gridRow = 'span 2'; // 高比宽大，占2行
        container.style.height = '400px'; // 设置图片容器的高度
    } else if (aspectRatio > 1.5) {
        // 如果图片宽比高大，给它更多的列
        container.style.gridColumn = 'span 2'; // 宽比高大，占2列
        container.style.width = '400px'; // 设置图片容器的宽度
    } else {
        // 对于普通比例的图片，使用默认的宽高
        container.style.height = '200px';
        container.style.width = '200px';
    }
}

// 打开模态框
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// 点击空白处关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}