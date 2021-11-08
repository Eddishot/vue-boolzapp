

Vue.config.devtools = true;

console.log("ahhahahahahhaha")
new Vue({

    el: "#radice",

    data : {
        welcome: "welcome",

        friends:[
            {
                name:"Andrea",
                avatar:"img/avatar_5.jpg",
                messages:[
                    {
                        date: "10/2/2020 15:15:15",
                        text:" Ciao, da teanto che non ci si vede",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "10/2/2020 15:15:20",
                        text:"Ti va di andare a prendere un boccone da qualche parte? ",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "10/2/2020 15:19:20",
                        text:"Ehila, da quanto tempo. Certo che andiamo decidi tu il posto ",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "10/2/2020 15:19:30",
                        text:"Ha aperto al centro un nuovo posto deove fanno la cucina Indiana.Proviamo quello ",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "10/2/2020 15:25:20",
                        text:"Allora prenoto per domani. A domani",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "10/2/2020 15:26:30",
                        text:"Perfetto allora senti anche gli altri ",
                        status:"received",
                        color:"white"

                    },
                ]

            },
            {
                name:"Jessica",
                avatar:"img/avatar_6.jpg",
                messages:[
                    {
                        date: "29/2/2020 13:15:35",
                        text:" Ciao, puoi andare a comprare il latte per favore che manca?",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "29/2/2020 13:17:40",
                        text:"Se ci sono compra anche i biscotti per il cane",
                         
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "29/2/2020 13:35:50",
                        text:"ok va bene",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "29/2/2020 13:35:57",
                        text:"Serve altro?",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "29/2/2020 13:45:20",
                        text:"No apposto cosi, grazie mille",
                        status:"sent",
                        color:"green"

                    },
                ]

            },
            {
                name:"federico",
                avatar:"img/avatar_7.jpg",
                messages:[
                    {
                        date: "21/2/2020 17:08:35",
                        text:" Ehi Fede non ti scordare della partita di stasera",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "21/2/2020 17:12:40",
                        text:"Dobbiamo stare in campo per le 21, quindi dovremmo essere in campo 15 minuti prima",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "21/2/2020 17:23:50",
                        text: "Ok mi passi a prendere tu?",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "21/2/2020 17:23:50",
                        text: "che ho portato la macchina dal meccanico",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "21/2/2020 17:45:20",
                        text:"si andiamo insieme",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "21/2/2020 17:49:50",
                        text: "perfetto a dopo allora",
                        status:"received",
                        color:"white"

                    },
                ]

            },
           
            {
                name:"Claudia",
                avatar:"img/avatar_6.jpg",
                messages:[
                    {
                        date: "25/2/2020 22:02:35",
                        text:" Ehi claudia hai visto che Andrea si è fatto male al lavoro?",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "25/2/2020 22:16:40",
                        text:"Rispondi che tra poco parto per andare a trovarlo all'ospedale",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "25/2/2020 22:26:50",
                        text: "Cavoli non lo sapevo.Dobbiamo andarci subito",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "25/2/2020 22:55:20",
                        text:"Va bene, ci vediamo dopo che ti passo a prendere io",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "25/2/2020 22:256:50",
                        text: "Va bene intanto mi vesto allora",
                        status:"received",
                        color:"white"

                    },
                ]

            },
        ],

        activeChat: {},

        newMessage: "",

        filterMessage: "",
        
        
    },

    methods:{


        // pathFriendAvatar(avatar){
        //     return `img/avatar${avatar}.jpg`
        // },

        getLastMessage(messages){

            if(messages.lenght=== 0){

                return  "";
            }

             

            const message= messages[messages.lenght - 1].text;

            return message;
        },


        appearChatClick(chat){
            this.activeChat = chat
        },


        addMessage(testoMessaggio, stato){
            this.activeChat.messages.push({
                text: testoMessaggio,
                status: stato,
            })
        },


        responseClick(){

            this.addMessage(this.newMessage, "sent");


            this.newMessage = "";


            timeOutResponse(()=>{

                this.addMessage("Ottima Idea", "receveid")

            }, 1000 );
        },

        getFilteredData() {
            if (!this.filterMessage) {
              return this.friends;
            }
      
            return this.friends.filter((contact) => {
              // nome dell'utente attuale contiene il testo ricercato
              return contact.name
                .toLowerCase()
                .includes(this.filterMessage.toLowerCase().trim());
            });
        },
    },
})