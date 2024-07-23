let currentContentIndex = 0;
const contentElements = document.querySelectorAll('.content-each');

function showContent(index) {
  contentElements.forEach((element, i) => {
    element.classList.toggle('active', i === index);
  });
}

function prevContent() {
  currentContentIndex = (currentContentIndex - 1 + contentElements.length) % contentElements.length;
  showContent(currentContentIndex);
}

function nextContent() {
  currentContentIndex = (currentContentIndex + 1) % contentElements.length;
  showContent(currentContentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showContent(currentContentIndex);

  // This part seems to refer to another element 'slider-track-mobile', 
  // which was not included in the HTML provided.
  // Ensure you have such an element if you need this functionality.
  const sliderTrack = document.querySelector('.slider-track-mobile');
  if (sliderTrack) {
    const sliderContent = sliderTrack.innerHTML;
    // Clone the content to create a seamless loop
    sliderTrack.innerHTML += sliderContent;
  }
});
