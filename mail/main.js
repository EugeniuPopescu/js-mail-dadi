const inputEmail = document.querySelector('#email');
const btnVerify = document.querySelector('#myBtn');
const outputEmail = document.querySelector('#output');

let logers = ['andrei@gmail.com', 'victor@gmail.com', 'francesco@gmail.com', 'anatoli@gmail.com', 'marco@gmail.com', 'paras@gmail.com', 'ion@gmail.com', 'sabrina@gmail.com', 'alex@gmail.com', 'eugen@gmail.com', 'james@gmail.com', 'simo@gmail.com', 'pippo@gmail.com'];
logers.push('epopescuu@yahoo.it');

let verify = false;

// prendere solo il nome utente senza la parte finale della @gmail.com
// indexOf() -> prende la posizione di un di un carattere che gli do
// substring(min, max) -> mi taglia il carattere a seconda di come gli do min e max
const chiocciola = (inputEmail.value).indexOf("@");
let nomeUtente = (inputEmail.value).substring(0, chiocciola);


btnVerify.addEventListener('click', function() {
    
    if (inputEmail.value === '') {
        alert('Please insert an email');
    } else {
        for (let i = 0; i < logers.length; i++) {
            const email = logers[i];
            
            // prendere solo il nome utente senza la parte finale della @gmail.com
            // indexOf() -> prende la posizione di un di un carattere che gli do
            // substring(min, max) -> mi taglia il carattere a seconda di come gli do min e max
            const chiocciola = (inputEmail.value).indexOf("@");
            let nomeUtente = (inputEmail.value).substring(0, chiocciola);

            if (email == inputEmail.value) {
                verify = true;
                
                document.querySelector('#output').style.color = "green"
                document.querySelector('#output').style.fontSize = "2rem"
                outputEmail.innerHTML = `Benvenuto "${nomeUtente.toUpperCase()}"`;

                break;
            } else {
                verify = false;

                document.querySelector('#output').style.color = "red"
                document.querySelector('#output').style.fontSize = "2rem"
                outputEmail.innerHTML = `"${(inputEmail.value).toUpperCase()}" NON sei registrato`;
            }
        }
    }
});
