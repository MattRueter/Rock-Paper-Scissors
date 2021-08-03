
     let randomChoice
     let computerSelection
     let playerSelection

     let hCounter
     let cCounter
     let gameCounter

        function computerPlay() {
            randomChoice=Math.floor(Math.random()*3)+1;
            if (randomChoice==1) {
                computerSelection=1;
                console.log("computer plays rock");
            }else if (randomChoice==2) {
                computerSelection=2;
                console.log("computer plays paper");
            }else if (randomChoice==3) {
                computerSelection=3;
                console.log("computer plays scissors");
            }
        }

        /*playRound(human,computer) throws error on human variable declaration but still runs*/

        function playRound(human,computer){
            hCounter=0;
            cCounter=0;
            human=prompt("");
            human=human.toLowerCase();
            console.log(human);
            if (human=="rock" && computer ==3){
                console.log("You win. Rock beats scissors");
                hCounter +=1;
            }else if (human=="rock" && computer==2){
                console.log("You lose. Paper beats rock");
                cCounter +=1;
            }else if(human=="scissors" && computer==2){
                console.log("You win. Scissors beat paper");
                hCounter +=1;
            }else if (human=="paper" && computer==1){
                console.log("You win. Paper beats rock");
                hCounter +=1;
            }else if (human=="scissors" && computer==1){
                console.log("You lose. Rock beats scissors");
                cCounter +=1;
            }else {
                console.log("No winner!");
            }
        }

        function game(){
            gameCounter=0;
            hScore=0;
            cScore=0;
            while(gameCounter<5){
                computerPlay();
                playRound(playerSelection, computerSelection);
                gameCounter +=1;
                if(hCounter>cCounter){
                    hScore +=1;
                }else if(cCounter> hCounter){
                    cScore +=1;
                }
            }if (gameCounter==5){
                console.log("The game is finished!");
                if(hScore>cScore){
                    console.log("Congratulations! You beat the computer.");
                }else if(hScore<cScore){
                    console.log("Sorry. You have lost. Maybe next time.");
                }else {
                    console.log("Everyone wins today.");
                }
            }
        }
        game();
