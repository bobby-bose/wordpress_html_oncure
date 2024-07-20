let currentIndex = 0;
const contents = document.querySelectorAll('.content-each');

function showContent(index) {
    contents.forEach((content, i) => {
        content.classList.remove('active');
        if (i === index) {
            content.classList.add('active');
        }
    });
}

function prevContent() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : contents.length - 1;
    showContent(currentIndex);
}

function nextContent() {
    currentIndex = (currentIndex < contents.length - 1) ? currentIndex + 1 : 0;
    showContent(currentIndex);
}

// Initialize by showing the first content
showContent(currentIndex);
