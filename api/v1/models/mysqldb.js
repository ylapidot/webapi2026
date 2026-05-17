const mysql=require('mysql2');
const conn=mysql.createConnection(
    {
        host:'localhost',
        user:'yaron',
        password:'yaron123',
        port:3306,
        database:'webapi'
    }
);// יצירת אובייקט מסוג חיבור לבסיס הנתונים
module.exports=conn;


// ניצור שכבת ביניים משלנו middleware