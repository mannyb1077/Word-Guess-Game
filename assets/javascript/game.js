
        //Create array of Words
        //Choose Words Randomly
        //Create underscores based on words
        //Get users guess
        //Check if guess is right
        //If right, push to array
        //If wrong, push to wrong array


            var wins = 0;
            var guessesRemaining = 9;
            
            



            document.onkeyup = function ()
            {
                var letterTyped = String.fromCharCode(event.keyCode).
                toLowerCase();
               
                console.log(letterTyped);
                // console.log(lettersGuessed);

                
                var lettersGuessed = [];
                var movies = ["Terminator","Back to the Future", "ET", "Predator","The Karate Kid"];
                var randomNum = Math.floor(Math.random() * movies.length);
                var randomMovie = movies[randomNum];
                console.log(randomMovie)
                
                lettersGuessed.push(letterTyped);
                

                if(randomMovie.indexOf(letterTyped) > -1)
                {
                    // console.log(lettersGuessed);
                    
                }

                guessesRemaining--
                console.log(guessesRemaining)

                if (guessesRemaining <0)
                {
                    alert("YOU LOSE!");
                    guessesRemaining =9;
                    
                }
    
            
                var html= "<p>Press any key to get started!</p>" +
                "<p> Wins:" + wins + "</p>" +  
                "<p> Current Word:  " + randomMovie + "</p>"+
                "<p> Letters Already Guessed:  " + lettersGuessed + "</p>" +
                "<p> Number of Guesses Remaining:  " + guessesRemaining + "</p>";
        
                document.querySelector('#game').innerHTML =html;

            }//End onKeyUp

       