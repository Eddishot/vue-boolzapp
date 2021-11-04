

Vue.config.devtools = true;

console.log("ahhahahahahhaha")
new Vue({

    el: "radice",

    data : {

        friends:[
            {
                name:"Andrea",
                avatar:"../img/avatar_5.jpg",
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
                        date: "10/2/2020 15:25:20",
                        text:"Allora prenoto per domani. A domani",
                        status:"sent",
                        color:"green"

                    },
                ]

            },
            {
                name:"Jessica",
                avatar:"../img/avatar_6.jpg",
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
                        date: "29/2/2020 13:45:20",
                        text:"Grazie mille",
                        status:"sent",
                        color:"green"

                    },
                ]

            },
            {
                name:"federico",
                avatar:"../img/avatar_7.jpg",
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
                        date: "21/2/2020 17:45:20",
                        text:"si andiamo insieme",
                        status:"sent",
                        color:"green"

                    },
                ]

            },
            {
                name:"francesca",
                avatar:"../img/avatar_6.jpg",
                messages:[
                    {
                        date: "25/2/2020 22:02:35",
                        text:" Ehi Francesca dobbiamo portare a termine il progetto per dopodomani. A che punto sei?",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "25/2/2020 22:16:40",
                        text:"Rispondi che devo dirlo anche a Carlo che vuole saperlo",
                        status:"sent",
                        color:"green"

                    },
                    {
                        date: "25/2/2020 22:26:50",
                        text: "Ho quasi finito, mi manca solamente l´ultima parte",
                        status:"received",
                        color:"white"

                    },
                    {
                        date: "25/2/2020 22:55:20",
                        text:"Va bene, ci vediamo dopo a cena con gli altri",
                        status:"sent",
                        color:"green"

                    },
                ]

            },
        ]
        
        
    }
})