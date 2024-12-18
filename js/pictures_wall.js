// 调整图片的大小和占位
function adjustImageSize(img) {
    img.onload = function () {
        const aspectRatio = img.naturalWidth / img.naturalHeight; // 获取图片的宽高比
        const container = img.parentElement;

        console.log('图片宽高比:', aspectRatio);

        // 图片纵横比小于1（高比宽大）
        if (aspectRatio < 1) {
            if (aspectRatio < 0.5) {
                container.style.gridRow = 'span 3'; // 占用3行
                container.style.height = 'auto'; // 高度自适应
            } else if (aspectRatio < 0.8) {
                container.style.gridRow = 'span 2'; // 占用2行
                container.style.height = 'auto'; // 高度自适应
            } else {
                container.style.gridRow = 'span 1'; // 占用1行
                container.style.height = 'auto'; // 高度自适应
            }
            container.style.width = 'auto'; // 宽度自适应

        } else if (aspectRatio > 1.5) { // 图片宽比高大
            if (aspectRatio > 2) {
                container.style.gridColumn = 'span 3'; // 占用3列
                container.style.width = 'auto'; // 宽度自适应
            } else if (aspectRatio > 1.3) {
                container.style.gridColumn = 'span 2'; // 占用2列
                container.style.width = 'auto'; // 宽度自适应
            } else {
                container.style.gridColumn = 'span 1'; // 占用1列
                container.style.width = 'auto'; // 宽度自适应
            }
            container.style.height = 'auto'; // 高度自适应

        } else {
            container.style.gridRow = 'span 1'; // 占用1行
            container.style.gridColumn = 'span 1'; // 占用1列
            container.style.width = 'auto'; // 宽度自适应
            container.style.height = 'auto'; // 高度自适应
        }

        // 确保容器的样式没有被其他 CSS 样式影响
        container.style.boxSizing = 'border-box'; // 避免 padding 和 border 冲突
    };

    // 如果图片已经加载完成，则直接执行
    if (img.complete) {
        img.onload();
    }
}

