const iso = (offset=0) => { const d=new Date(); d.setDate(d.getDate()+offset); return d.toISOString().slice(0,10) }

export const seedData = {
  departments: [
    {id:'dep1',name:'Cardiology',icon:'HeartPulse',description:'Advanced heart care and diagnostics.',doctors:2},
    {id:'dep2',name:'Neurology',icon:'Brain',description:'Expert care for brain and nervous system.',doctors:1},
    {id:'dep3',name:'Pediatrics',icon:'Baby',description:'Compassionate healthcare for children.',doctors:1},
    {id:'dep4',name:'Orthopedics',icon:'Bone',description:'Complete bone, joint and spine care.',doctors:1},
    {id:'dep5',name:'Dermatology',icon:'Sparkles',description:'Healthy skin, hair and nail solutions.',doctors:1},
    {id:'dep6',name:'General Medicine',icon:'Stethoscope',description:'Primary and preventive medical care.',doctors:1}
  ],
  doctors: [
    {id:'doc1',name:'Dr. Ananya Rao',email:'ananya@medora.com',password:'doctor123',department:'Cardiology',speciality:'Interventional Cardiologist',experience:12,fee:900,rating:4.9,patients:1200,avatar:'AR',available:['09:00 AM','10:00 AM','11:30 AM','03:00 PM'],status:'Active',about:'Specialist in preventive cardiology and minimally invasive cardiac procedures.'},
    {id:'doc2',name:'Dr. Rohan Mehta',email:'rohan@medora.com',password:'doctor123',department:'Neurology',speciality:'Consultant Neurologist',experience:10,fee:850,rating:4.8,patients:980,avatar:'RM',available:['09:30 AM','11:00 AM','02:30 PM','04:00 PM'],status:'Active',about:'Experienced in migraine, epilepsy and movement disorder management.'},
    {id:'doc3',name:'Dr. Priya Nair',email:'priya@medora.com',password:'doctor123',department:'Pediatrics',speciality:'Senior Pediatrician',experience:9,fee:650,rating:4.9,patients:1450,avatar:'PN',available:['10:00 AM','11:00 AM','12:00 PM','05:00 PM'],status:'Active',about:'Child-friendly pediatrician focused on growth, nutrition and immunization.'},
    {id:'doc4',name:'Dr. Arjun Kapoor',email:'arjun@medora.com',password:'doctor123',department:'Orthopedics',speciality:'Orthopedic Surgeon',experience:14,fee:1000,rating:4.7,patients:870,avatar:'AK',available:['09:00 AM','10:30 AM','03:30 PM','05:00 PM'],status:'Active',about:'Specialist in sports injury, joint preservation and arthroscopic surgery.'},
    {id:'doc5',name:'Dr. Sana Sheikh',email:'sana@medora.com',password:'doctor123',department:'Dermatology',speciality:'Clinical Dermatologist',experience:8,fee:750,rating:4.8,patients:1100,avatar:'SS',available:['10:30 AM','12:00 PM','02:00 PM','04:30 PM'],status:'Active',about:'Evidence-based medical and cosmetic dermatology for all age groups.'},
    {id:'doc6',name:'Dr. Vikram Iyer',email:'vikram@medora.com',password:'doctor123',department:'General Medicine',speciality:'Senior Physician',experience:16,fee:600,rating:4.9,patients:2100,avatar:'VI',available:['08:30 AM','10:00 AM','01:00 PM','06:00 PM'],status:'Active',about:'Comprehensive adult medicine and long-term chronic disease management.'}
  ],
  patients: [
    {id:'pat1',name:'Aarav Sharma',email:'patient@demo.com',password:'patient123',phone:'9876543210',gender:'Male',age:29,bloodGroup:'O+',address:'Bengaluru, Karnataka'},
    {id:'pat2',name:'Meera Joshi',email:'meera@example.com',password:'patient123',phone:'9898989898',gender:'Female',age:35,bloodGroup:'A+',address:'Bengaluru, Karnataka'}
  ],
  appointments: [
    {id:'apt1',patientId:'pat1',doctorId:'doc1',date:iso(0),time:'10:00 AM',reason:'Routine cardiac consultation',status:'Approved',createdAt:new Date().toISOString()},
    {id:'apt2',patientId:'pat2',doctorId:'doc2',date:iso(1),time:'11:00 AM',reason:'Recurring migraine',status:'Pending',createdAt:new Date().toISOString()},
    {id:'apt3',patientId:'pat1',doctorId:'doc5',date:iso(-7),time:'02:00 PM',reason:'Skin allergy follow-up',status:'Completed',createdAt:new Date().toISOString()},
    {id:'apt4',patientId:'pat2',doctorId:'doc3',date:iso(3),time:'12:00 PM',reason:'Pediatric consultation',status:'Approved',createdAt:new Date().toISOString()}
  ]
}
