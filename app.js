require('dotenv').config();//הפעלת הפונקציה שטוענת את קובץ דוט איאנוי 
const express=require('express'); // חיבור לספריית אקספרס
const app=express();// יצמירת אפליקיית אקספרס
const routerProduct=require('./api/v1/routes/product');// ייבוא של הראוטר של המוצרים
const routerUser=require('./api/v1/routes/user');// ייבוא של הראוטר של המוצרים
const morgan=require('morgan');
const myLog=require('./api/v1/middlewares/myLog');// צירפנו את שכבת הלוג שבנינו

   
// new comment
// const myLog=(req,res,next)=>{
//       console.log(`${req.}`);
// }
// app.use((req,res,next)=>{
//     const arrAllowList=['127.0.0.1','::1'];
//    // for()
// });
// app.use((req,res,next)=>{
//     if(req.method=='GET' && req.path=='/product')
//     {
//         return res.status(200).json({msg:'all Products'});
//     }
//     else{
//         next();
//     }
// });
//app.use(myLog);// הוספת שכבת הלוג שצירפנו אל האפליקציה
// נוסיף שכבת ביניים שמטפלת בגוף של הבקשה הנשלחת בפורמט ג'ייסון
// app.use(morgan('dev'));// הוספת שכבה שמבצעת רישום של כל בקשה במערכת אל הקונסול, משמש אותנו לצורך מעקב ובקרה
app.use(express.json());
app.use(express.urlencoded());
//app.use('/product',routerProduct);// שילוב של הראוטר מוצרים באפליקציה
app.use('/user',routerUser);// שילוב של הראוטר מוצרים באפליקציה

module.exports=app;// ייצוא של המודול שכתבנו