const myAge = 15
let answer = 0

document.getElementById('button').addEventListener('click', newfunction)
function newfunction () {
  while (myAge != answer) {
    answer = prompt('Guess my age!')
    if (answer == myAge) {
      alert('You got it right!')
    } else if (answer < myAge) {
      alert('Guessed too small, please try again')
    } else if (answer > myAge) {
      alert('Guessed to big, please try again')
    } else {
      alert('Invalid answer, please try again')
    }
  }
}
