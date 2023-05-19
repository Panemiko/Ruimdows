const startButton = document.getElementById('start-button')
const startButtonIcon = document.getElementById('start-button-icon')

const taskVisionButton = document.getElementById('task-vision-button')
const taskVisionImage = document.getElementById('task-vision-image')

function handleStartButton() {
    startButton.addEventListener('mouseover', () => {
        startButtonIcon.style.filter = 'grayscale(0) brightness()'
    })
    
    startButton.addEventListener('mouseout', () => {
        startButtonIcon.style.filter = 'grayscale(100) brightness(100)'
    })
}

handleStartButton()
