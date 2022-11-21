export default{
    admins:[
        {
            id:1,
            name:"أحمد",
            username:"ahmed",
            password:"123"
        },
        {
            id:2,
            name:"محمد",
            username:"mohamed",
            password:"123"
        }
    ],
    servicePlaces:[
        {
            id:1,
            name:"مطار القاهرة",
            numberOfAgents:1,
        },
        {
            id:2,
            name:"وسط البلد",
            numberOfAgents:2,
        }
    ],
    agents:[
        {
            id:1,
            name:"محمد",
            username:"mohamed",
            password:"123",
            servicePlaces:[{
                id:1,
                name:"مطار القاهرة"
            },
            {
                id:2,
                name:"وسط البلد"
            }],
            cost:0,
        },
        {
            id:2,
            name:"حسن",
            username:"hassan",
            password:"123",
            servicePlaces:[
            {
                id:2,
                name:"وسط البلد"
            }],
            cost:0
        }
    ],
    payments:[
        {
            id:1,
            agentId:1,
            price:20,
            //date:((new Date(2022-11-22)).toLocaleDateString("en-US")),
             date: ((new Date("2022-11-21 11:13:00")).toISOString().split('T')[0]),
            details: "دفع كارته",
        },
        {
            id:2,
            agentId:1,
            price:20,
            date: ((new Date("2022-11-24")).toISOString().split('T')[0] ),
            details: "فطار",
        },
        {
            id:3,
            agentId:2,
            price:20,
            date: Date.now(),
            details: "دفع كارته",
        },

    ],
    receipts:[
        {
            id:1,
            agentId:1,
            companyId:1,
            details:"استلمت من شركة كذا",
            date:((new Date("2022-11-21")).toISOString().split('T')[0]),
        },
        {
            id:2,
            agentId:1,
            companyId:1,
            details:"استلمت من شركة كذا",
            date:((new Date("2022-11-24")).toISOString().split('T')[0]),
        },
    ]
  
  
}