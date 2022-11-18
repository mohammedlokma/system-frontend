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
            }]
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
            }]
        }
    ]
  
  
}