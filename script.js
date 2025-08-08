const buttons = document.querySelectorAll('.list-button');
const lists = document.querySelectorAll('.list');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        lists[index].classList.toggle('show');
    });
});
