const startGame = () => {
    const startbtn = document.querySelector('.start');
    startbtn.addEventListener('click', () => {
        document.querySelector('.gameboard').style.removeProperty('visibility')
    })
}
startGame()