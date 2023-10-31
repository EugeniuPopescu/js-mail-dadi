const inputEmail = document.querySelector('#email');
const btnVerify = document.querySelector('#myBtn');
const outputEmail = document.querySelector('#output');
let verify = false;

let logers = ['andrei@gmail.com', 'victor@gmail.com', 'francesco@gmail.com', 'anatoli@gmail.com', 'marco@gmail.com', 'paras@gmail.com', 'ion@gmail.com', 'sabrina@gmail.com', 'alex@gmail.com', 'eugen@gmail.com', 'james@gmail.com', 'simo@gmail.com', 'pippo@gmail.com'];
logers.push('epopescuu@yahoo.it');

btnVerify.addEventListener('click', function() {
    
    if (inputEmail.value === '') {
        alert('Please insert an email');
    } else {
        for (let i = 0; i < logers.length; i++) {
            const email = logers[i];
            
            
            if (email == inputEmail.value) {
                document.querySelector('#output').style.color = "green"
                document.querySelector('#output').style.fontSize = "2rem"
                outputEmail.innerHTML = `Questa email "${email}" è Loggata`;
                console.log(email);
                
                verify = true;
            } else {
                document.querySelector('#output').style.color = "red"
                document.querySelector('#output').style.fontSize = "2rem"
                outputEmail.innerHTML = `Non esiste "${inputEmail.value}", Registrati`;

                verify = false;
            }
        }
    }
});