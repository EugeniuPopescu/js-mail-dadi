const io = Math.floor(Math.random() * 6) + 1;
const pc = Math.floor(Math.random() * 6) + 1;

console.log(io, pc);

alert('Tenta la fortuna contro il PC');
const ioPrompt = alert(`il tuo numero è ${io}`);
const pcPrompt = alert(`Il numero del PC è ${pc}`);

document.querySelector('#io').innerHTML = `Il tuo numero RANDOM è ${io}`;
document.querySelector('#pc').innerHTML = `Il numero RANDOM del PC è ${pc}`;

let risultato;

if (io > pc) {
    risultato = `Complimenti hai Vinto`;
} else if (io < pc) {
    risultato = `Il gioco vince sempre`;
} else {
    risultato = `Pari`;
}

document.querySelector('#risultato').innerHTML = `${risultato}`;
