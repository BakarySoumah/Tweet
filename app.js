const textarea = document.querySelector('.textarea');
const count = document.querySelector('.count');

function countLetters() {
    const text = textarea.Value;
    const textLength = textarea.value.length;
    count.innerHTML =`${textLength}`;
}