const {createApp} = Vue;

createApp({
  data(){
    return {

      contatti: [{

        nome:'Michele',
        avatar:'img/avatar_1.jpg'
      }]

    }

  }

}).mount('#app')