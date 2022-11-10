const {createApp} = Vue;

createApp({
  data(){
    return {

      selezioneMessaggio:'0',
      messaggioInviato:'',
      ricerca:'',
      chat:'',
      contatti: [
        {

        nome:'Michele',
        avatar:'img/avatar_1.jpg',
        testo: 'Ultimo messaggio inviato',
        orario: '12',
        visible:true,
        messages:[
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },

          {
            date: '10/01/2020 15:50:55',
            message: 'Ricordati di stendere i panni?',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:55',
            message: 'tutto fatto!',
            status: 'received'
          }


        ],

        },

        {

          nome:'Fabio',
          avatar:'img/avatar_2.jpg',
          testo: 'Ultimo messaggio inviato',
          orario: '12',
          visible:true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent' 
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            },
          ]

  
          },

          {

            nome:'Samuele',
            avatar:'img/avatar_3.jpg',
            testo: 'Ultimo messaggio inviato',
            orario: '12',
            visible:true,
            messages:[
              {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
              },
              
            ],
    
            },

            {

              nome:'Alessandro B',
              avatar:'img/avatar_4.jpg',
              testo: 'Ultimo messaggio inviato',
              orario: '12',
              visible:true,
              messages:[
                {
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                },
                
              ]
      
              },

              {

                nome:'Claudia',
                avatar:'img/avatar_5.jpg',
                testo: 'Ultimo messaggio inviato',
                orario: '12',
                visible:true,
                messages:[
                  {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                  },
                  {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent' 
                  }
                ],
              
        
                },

                {

                  nome:'Federico',
                  avatar:'img/avatar_6.jpg',
                  testo: 'Ultimo messaggio inviato',
                  orario: '12',
                  visible:true,
                  messages:[
                    {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
                  ],
                },
                
          
                  

                  {

                    nome:'Davide',
                    avatar:'img/avatar_7.jpg',
                    testo: 'Ultimo messaggio inviato',
                    orario: '12',
                    visible:true,
                    messages:[
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status:'received'
                        }
                    ],
            
                  }
      
    ],


    activeBox:0

    }

  },
  methods:{
    cambiaBox(index){
      this.activeBox = index;
    },
    filtraContatti() {
      this.contatti.forEach(contatto => {
        contatto.visible = true;
        if (!contatto.nome.toLowerCase().includes(this.ricerca.toLowerCase())) {
          contatto.visible = false;
        }
        
      });
    },

    addMessage(){

      var options = {weekday: 'long', year:'numeric',month:'long',day:'numeric'};
      var today = new Date();

      
      this.contatti[this.activeBox].messages.push({
        date: today,
        message: this.messaggioInviato,
        status: 'sent'
      });
    },

    messaggioSelezionato(indice){
      if(this.selezioneMessaggio == '2'){
        this.contatti[this.activeBox].messages.splice(indice,1);
      }
    }

   

    
  }


}).mount('#app')