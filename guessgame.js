const game = {
    title: "Guess The Number!",
    biggestNum: 10,
    smallesNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function () {
       let guess = parseInt(prompt(`Let's play ${this.title} Enter a guess between ${this.smallestNum} and ${this.biggestNum}. If you give up "quit".`));
return guess
    },
    play: function () {
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum +1)) + this.smallestNum
        let guess = NaN;
        while (guess !== this.secretNum) {
            guess = this.getGuess();
            this.prevGuesses.push(guess)
            this.render(guess)
            if (guess === this.secretNum) return;
        }
    },

    render: function(guess) {
if (guess > this.secretNum) {
    alert(`you guess is too high`)
} else if (this.getGuess< this.secretNum) {
    alert(`your guess is too low`)
} else if (this.getGuess === this.secretNum){
    alert(`Congratulations! You guessed the number in ${this.prevGuess.length} guesses!`)
}
    }

}
game.play();
console.log(this.guess)