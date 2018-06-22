document.addEventListener("DOMContentLoaded", function() {
    
    var board = document.querySelector(".plansza");

    timer = setInterval(function() {
        var zombie = document.createElement("div");
        zombie.classList.add("zombie");

        // losujemy liczbę z przedzialu 0 - do horyzont
        var randomNumber = Math.floor((Math.random() * 375) + 1);

        //trzeba elementowi zombie dodac element.style.bottom = losowaliczba+ "px"
        zombie.style.bottom = randomNumber + 'px';

        //tutaj if ze jesli bottom > 300 to ustaw elementowi scale(0.2)
        if (randomNumber > 375) {
            zombie.style.transform = "scale(0.2)";
        }

        zombie.style.animationDuration = "0,5s" + randomNumber + "s";

        board.appendChild(zombie);

        zombie.addEventListener("animationend", function(event) {
            console.log(event);
            this.remove();
        })
        
    }, 2500)
    })
;
