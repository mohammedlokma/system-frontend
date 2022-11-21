export default{
    companies:[
        {
            id:1,
            name:"فايزر",
            account:1000
        },
        {
            id:2,
            name:"مصر للتأمين",
            account:2000
        },
    ],
    payments:[
        {
            id:1,
            companyId:1,
            price:20,
            //date:((new Date(2022-11-22)).toLocaleDateString("en-US")),
             date: ((new Date("2022-11-21 11:13:00")).toISOString().split('T')[0]),
            details: "دفع اول",
        },
        {
            id:2,
            companyId:1,
            price:20,
            date: ((new Date("2022-11-24")).toISOString().split('T')[0] ),
            details: "دفع ثاني",
        },
        

    ],
    bills:[
        {
            id:1,
            companyId:1,
            price:100,
            details:"فاتورة 1 ",
            date:((new Date("2022-11-21")).toISOString().split('T')[0]),
        },
        {
            id:2,
            companyId:1,
            price:20,
            details:"فاتورة 2",
            date:((new Date("2022-11-24")).toISOString().split('T')[0]),
        },
    ],
    billDetails:[
        {
            id:1,
            billId:1,
            price:20,
            details:"دفع فاتورة جمركية",
        }
    ]
  
  
}