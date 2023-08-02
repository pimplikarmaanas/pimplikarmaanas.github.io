const darkMode = document.getElementById('darkMode');
const slider = document.getElementById('checkbox');

const onLoad = () => {
    if(window.matchMedia) {
        document.body.classList.toggle('dark-mode');

        // toggle the switch
        slider.checked = true;
    }
}

window.onload = onLoad();

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});