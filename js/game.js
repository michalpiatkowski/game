document.addEventListener("DOMContentLoaded", function() {
    
    var board = document.querySelector(".plansza");
    var score = 0;
    timer = setInterval(function() {
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");

        // losujemy liczbę z przedzialu 0 - do horyzont
        var randomNumber = Math.floor((Math.random() * 450) + 1);

        //trzeba elementowi zombie dodac element.style.bottom = losowaliczba+ "px"
        zombie.style.bottom = randomNumber + 'px';

        //tutaj if ze jesli bottom > 300 to ustaw elementowi scale(0.2)
        if (randomNumber > 375) {
            zombie.style.transform = "scale(0.2)";
        }

        var random = Math.floor((Math.random() * 30) + 1);

        zombie.style.animationDuration = "0.5s," + random + "s";

        zombie.style.zIndex = 600 - randomNumber;

        board.appendChild(zombie);

        zombie.addEventListener("animationend", function(event) {
            console.log(event);
            this.remove();
        })

        zombie.addEventListener("click", function (event) {
            this.remove();
            score++;
            console.log(score);
            //zwieksz
            //wstaw do score
        })
        
        
    }, 2250)
    })
;
