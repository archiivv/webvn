const contentSections = document.querySelectorAll('.content');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');

let currentSectionIndex = 0;

backBtn.addEventListener('click', () => {
    
    currentSectionIndex--;
    if (currentSectionIndex < 0) {
        currentSectionIndex = contentSections.length - 1;
    }
    showSection();
});

nextBtn.addEventListener('click', () => {
    
    currentSectionIndex++;
    if (currentSectionIndex >= contentSections.length) {
        currentSectionIndex = 0;
    }
    showSection();
});

function showSection() {
  
    contentSections.forEach((section) => {
        section.style.display = 'none';
    });
  
    contentSections[currentSectionIndex].style.display = 'block';
}

showSection();

document.body.style.zoom="125%"
