var elem = document.querySelector('.click');
function handleClick(event) {
    event.preventDefault();
    console.log(this.className);
}
elem.addEventListener('click', handleClick, false);
