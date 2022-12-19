import company from "../company";

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
    reportItems:[
        {
            id:1,
            name:'companyName',
            arabicName:'اسم الشركة',
            type:'text'
        },
        {
            id:2,
            name:'numberOfPackages',
            arabicName:'عدد الطرود',
            type:'number'
        },
        {
            id:3,
            name:'weight',
            arabicName:'الوزن',
            type:'number'
        },
        {
            id:4,
            name:'supplierName',
            arabicName:'اسم المورد',
            type:'text'
        },
        {
            id:5,
            name:'agentName',
            arabicName:'اسم المندوب',
            type:'text'
        },
        {
            id:6,
            name:'location',
            arabicName:'الموقع',
            type:'text'
        },
        {
            id:7,
            name:'certificateNumber',
            arabicName:'شهادة رقم',
            type:'text'
        },
        {
            id:8,
            name:'documentsDate',
            arabicName:'تاريخ استلام المستندات',
            type:'date'
        },
       

    ],
    fullReportData:[
        {
            id:1,
            companyName:'شركة فايزر',
            numberOfPackages:'7',
            weight:'454',
            supplierName:'شركة 1',
            agentName:'حسن',
            location:'مدينه نصر',
            certificateNumber:'12454',
            documentsDate:'23-11-2022',
            companyComment:"",
            agentComment:"تم تخريج الشحنه",
            releaseStatus:false,
            releaseDate:''

        
        },
        {
            id:1,
            companyName:'شركة مصر',
            numberOfPackages:'8',
            weight:'123',
            supplierName:'شركة 21',
            agentName:'أحمد حسن',
            location:'مدينه نصر',
            certificateNumber:'12454',
            documentsDate:'23-11-2022',
            companyComment:"",
            agentComment:"تم تخريج الشحنه",
            releaseStatus:true,
            releaseDate:''

        
        }
    ]
}