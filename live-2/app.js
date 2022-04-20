/* 
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/

const app = new Vue({
    el: '#app',
    data: {
        styleColor: 'red'
    },

    methods: {
        changeColor() {
            if (this.styleColor == 'red') {
                this.styleColor = 'blue'
            } else {
                this.styleColor = 'red'
            }
        }
    }
})