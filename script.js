
let secretNumber = Math.floor(Math.random()*20)+1

let score = 20
let highscore= 0 




function printMessage(msg){
    document.querySelector('.message').textContent=msg
}

 

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value)

    if(!guess){
      printMessage("No Number")
    } else if(guess===secretNumber){
      printMessage("You win")
      document.querySelector('body').style.backgroundColor='rgba(46, 204, 113)'
      document.querySelector('.number').style.width="30rem"
      document.querySelector('.number').textContent=secretNumber;

      if(score>highscore){
        document.querySelector('.highscore').textContent=score
        
      }

    } else if(guess !== secretNumber){
        printMessage(guess>secretNumber ? "Too High" : "Too Low")
        if(score>1){
            score--
            document.querySelector('.score').textContent=score
        } else {
            printMessage("Game Over")
            document.querySelector('.score').textContent=0

        }
    } 
    
})

document.querySelector('.again').addEventListener('click',function(){
    score=20
    secretNumber = Math.floor(Math.random()*20)+1
    document.querySelector('.score').textContent=score
    document.querySelector('.message').textContent="Start guessing..."
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor='rgb(54, 17, 17)'
    document.querySelector('.number').style.width="15rem"
    
    document.querySelector('.number').textContent="?"


})

