

const guess = document.querySelector("#area")
const przycisk = document.querySelector("#przycisk1")
const zmienkolor = document.querySelector("#przycisk3")
const wiadomosc = document.querySelector("#AlertToUser")

let liczba;
let liczbaprob = 1;
let random;
let indeks = 1;
random = Math.round(Math.random() * 10);


    // modules
    function getAnswer(event){
                    event.preventDefault();
                    const guess = document.querySelector("#area")

                    liczba = parseInt(guess.value);

                    switch(true){
                        case liczba>random:
                            wiadomosc.textContent="Podałes większą liczbe"
                            liczbaprob=liczbaprob+1;
                            break;
                        case liczba < random:
                            wiadomosc.textContent = "Podałes mniejszą liczbe";
                            liczbaprob = liczbaprob + 1;
                            break;

                        case liczba < 1 || liczba > 10:
                            alert("Podaj prawidłowe dane");
                            break;

                        case isNaN(liczba):
                            wiadomosc.textContent = "zły znak";
                            break;

                        default:
                            wiadomosc.textContent = "Wygrałes w " + liczbaprob + " prób";

                    }

       
    }

    function changecolor(event){
        event.preventDefault();
        let Colors = [ "grey","black","orange","purple" ]


        document.body.style.backgroundColor = Colors[indeks];
        indeks = (indeks+1);
        if(indeks==4) indeks=0;

        }

    // funkcja głowna
    function main(){

        wiadomosc.textContent = "Wygenerowałem dla Ciebie liczbę od 1-10 sprawdz czy ją zgadniesz"


        przycisk.addEventListener("click", getAnswer);
        zmienkolor.addEventListener("click", changecolor);
    }


main();

