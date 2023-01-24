console.log("Collegamento javascript ok");

/*
    STEPS:
        Milestone 1
            1. Creare il logo, ul e un li in html
            2. In js, creare un attributo data contenente la lista di cose da fare
                2A. Sarà una lista di oggetti con 2 chiavi: text e done
            3. Con un ciclo for, stampare in html tutti i componenti della lista nella pagina
            4. Quando done ha come valore true, assegnare all'item una classe con text-decoration: line-through
        Milestone 2
            1. Aggiungere al div contenente l'item un'icona x per togliere l'oggetto dalla lista
        Milestone 3
            1. Aggiungere in html un input text e un pulsante
            2. Collegare l'input con v-model ad un'elemento vuoto
            3. Aggiungere un v-on al pulsante per aggiungere la stringa scritta nell'input alla lista
                3A. Sempre al click, la stringa verrà pushata nell'array originale tramite l'elemento vuoto creato in precedenza
*/

const { createApp } = Vue;

createApp ({
    data () {
        return {
            
        }
    }
}).mount('#app');