const toggleMenu = document.getElementById('toggleMenu');
const menuButton = document.getElementById('menuButton');


menuButton.addEventListener('click', () => {
    console.log('Funcionando');
    toggleMenu.classList.toggle('active');
})

document.querySelectorAll('.toggleItem').forEach(n => n.addEventListener('click', () => {
    console.log('Retornando');
    toggleMenu.classList.remove('active');

}))