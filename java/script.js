const {createApp} = Vue;

createApp({
  data(){
    return {

      contatti: [
        {

        nome:'Michele',
        avatar:'img/avatar_1.jpg',
        testo: 'Ultimo messaggio inviato',
        orario: '12'

        },

        {

          nome:'Fabio',
          avatar:'img/avatar_2.jpg',
          testo: 'Ultimo messaggio inviato',
          orario: '12'
  
          },

          {

            nome:'Samuele',
            avatar:'img/avatar_3.jpg',
            testo: 'Ultimo messaggio inviato',
            orario: '12'
    
            },

            {

              nome:'Alessandro B',
              avatar:'img/avatar_4.jpg',
              testo: 'Ultimo messaggio inviato',
              orario: '12'
      
              },

              {

                nome:'Claudia',
                avatar:'img/avatar_5.jpg',
                testo: 'Ultimo messaggio inviato',
                orario: '12'
        
                },

                {

                  nome:'Federico',
                  avatar:'img/avatar_6.jpg',
                  testo: 'Ultimo messaggio inviato',
                  orario: '12'
          
                  },

                  {

                    nome:'Davide',
                    avatar:'img/avatar_7.jpg',
                    testo: 'Ultimo messaggio inviato',
                    orario: '12'
            
                    },
      
    ],
    activeBox:0

    }

  },

}).mount('#app')