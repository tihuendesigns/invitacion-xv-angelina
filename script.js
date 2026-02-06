const faders = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
});

faders.forEach(fader => {
observer.observe(fader);
});
