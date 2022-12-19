export default{
expenses:[
    {
        id:1,
        clientId:1,
        price:20,
        date:new Date().toISOString().split('T')[0],
        details:"فطار",
    },
    {
        id:2,
        clientId:1,
        price:40,
        date:new Date().toISOString().split('T')[0],
        details:"إكرامية",
    },
    {
        id:1,
        clientId:2,
        price:20,
        date:new Date().toISOString().split('T')[0],
        details:"فطار",
    },
  
],
coupons:[
    {
        id:1,
        clientId:1,
        companyName:"فايزر",
        price:200,
        billNumber:"11548",
        couponNumber:"1223",
        policyNumber:"123",
        certificateNumber:"1323",
        date:new Date().toISOString().split('T')[0] ,
        details:"قسيمة 1"
    },
    {
        id:2,
        clientId:1,
        companyName:"مصر للتأمين",
        price:150,
        billNumber:"264656",
        couponNumber:"1223",
        policyNumber:"123",
        certificateNumber:"1323",
        date:new Date().toISOString().split('T')[0] ,
        details:"قسيمة 2"
    },
    {
        id:3,
        clientId:2,
        companyName:"فايزر",
        price:450,
        billNumber:"64244",
        couponNumber:"1223",
        policyNumber:"123",
        certificateNumber:"1323",
        date:new Date().toISOString().split('T')[0] ,
        details:"قسيمة 1"
    }
]
}