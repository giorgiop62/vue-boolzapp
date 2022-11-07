const {createApp} = Vue;

createApp({
  data(){
    return {

      contatti: [{

        nome:'Michele',
        avatar:'img/avatar_1.jpg',
        testo: 'Ultimo messaggio inviato',
        orario: '12'

      }]

    }

  }

}).mount('#app')