console.log(`For some reason this is not working`)

const userWord = prompt(`pick a word`)
console.log(userWord)

const yourFriendsWord = ("hi")

function alertTheUser(word) {
    alert(`your word was ${word}...`)
}
alertTheUser(userWord)


function add7AndF(f){
    console.log(7+f)
}

add7AndF(13)
add7AndF(98)

function figuresOutCSScore(h, k) {
    const myFigure = 890

    return h + k + myFigure

}

const userCSScore = figuresOutCSScore(8, 11)
console.log(userCSScore)

function seventeen(){
    return 17
}

function eightytwo(){
    return 82
}

function twelve(){
    return 12
}

console.log(seventeen() / twelve() * eightytwo())