const form = document.getElementById('numberForm')

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max + 1) + min);
}

let status = 0
const values = [
    'Calcul de la racine carrée de -1',
    'En train de calculer la température du soleil',
    'Trouve un chat',
    'Finit Elden rings',
    'Mange un gigatacos',
    'Réfléchit un peu',
    'Demande à Einstein',
    'Etude de la physique quantique',
    'Tue un insecte',
    'Joue une musique sympa',
    'Fait une lettre de motivation pour la NASA',
    'Révèle les secrets de l\'humanité',
    'Trouve les problèmes de l\'humanité',
    'Laisse libre court à mon imagination',
    'Cherche Jeff Bezos',
    'Attend une livraison',
    'Fabrique un fromage',
    'Ecoute du Rammstein',
    'Prend un avion pour rentrer chez lui',
    'Assiste à un meeting du RN'
]
let  ran = getRandomInt(values.length - 1, 3)

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const numberInput = document.getElementById('numberInput').value;

    document.querySelector('h1').innerText = 'Chargement...';
    document.getElementById('numberForm').style.display = 'none';

    for (let i = 0; i <= ran; i++) {
        setTimeout(() => {
            if(status === 0) {
                status ++
                document.querySelector('h1').innerText = 'Chargement.';
            } else if(status === 1) {
                status ++
                document.querySelector('h1').innerText = 'Chargement..';
            } else {
                status = 0
                document.querySelector('h1').innerText = 'Chargement...';
            }
            if(i === ran) {
                document.querySelector('h1').innerText = 'Trouvé !';
                document.getElementById('result').innerText = `Le chiffre était : ${numberInput}`;
            } else {
                document.getElementById('result').innerText = values[getRandomInt(values.length, 0)];
            }
        }, 1000 * i);
    }
});