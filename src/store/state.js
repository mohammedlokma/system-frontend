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
            name:"مطار القاهرة"
        },
        {
            id:2,
            name:"وسط البلد"
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
        }
    ]
  
  
}