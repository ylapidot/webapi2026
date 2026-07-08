const mySqlDb = require('../models/mysqldb');
const bcrypt = require('bcrypt');
module.exports = {
    getAll: (req, res) => {
        const sql = 'select * from t_user';// שאילתה המחזירה את כל המוצרים
        mySqlDb.query(sql, (err, results, feilds) => {
            if (err == null) {
                console.log(results);
                return res.status(200).json(results);
            }
            else {
                console.log(err);
                return res.status(500).json({ 'error': err.message });

            }
        });// הפעלת השאילתה וקבלת התוצאות בתוך פונקציית החזרה
        //   return  res.status(200).json({msg:`All users`});// החזרת תשובה של כל המוצרים
    },
    getById: (req, res) => {
        const uid = req.params.id;// קבלת קוד המוצר שנשלח
        const sql = `select * from t_user where uid=${uid}`;// שאילתה המחזירה את כל המוצרים
        mySqlDb.query(sql, (err, results, feilds) => {
            if (err == null) {
                console.log(results);
                return res.status(200).json(results);
            }
            else {
                console.log(err);
                return res.status(500).json({ 'error': err.message });

            }
        });
    },
    add: (req, res) => {
        // הוספת מוצר חדש

        let data = req.body;// שמירת התוכן שנשלח בגוף הבקשה
        let arr = Object.keys(data);// מייצרת מערך של כל השדות שיש באובייקט
        let fields = '';
        let values = '';
        let sql = `SELECT * FROM t_user WHERE email='${data.email}'`;
        mySqlDb.query(sql, (err, results, feilds) => {
            if (err != null)// במידה והייתה שגיאת מערכת מציגים הודעה מתאימה
            {
                console.log(results);
                return res.status(500).json({ 'error': err.message });

            }
            else if (results.length > 0)// קיי משתמש עם המייל הנוכחי
            {
                return res.status(200).json({ msg: 'User Already Exist' });
            }

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == 'pass') {
                    let pass = data[arr[i]];
                    let hashPass = bcrypt.hashSync(pass, 10);
                    fields += `${arr[i]},`;// pname,price,cid
                    values += `'${hashPass}',`;// ' 'bread',50,99
                }
                else {
                    fields += `${arr[i]},`;// pname,price,cid
                    values += `'${data[arr[i]]}',`;// ' 'bread',50,99
                }

            }
            fields = fields.substring(0, fields.length - 1);// בטל פסיק מיותר בסוף
            values = values.substring(0, values.length - 1);// בטל פסיק מיותר בסוף
            sql = `INSERT INTO t_user (${fields}) VALUES (${values})`;

            mySqlDb.query(sql, (err, results, feilds) => {
                if (err == null) {
                    console.log(results);
                    return res.status(201).json(results);
                }
                else {
                    console.log(err);
                    return res.status(500).json({ 'error': err.message });

                }
            });


        });




    },
    update: (req, res) => {
        const uid = req.params.id;// קבלת קוד המוצר לעדכון
        let sql = 'update t_user set ';
        let data = req.body;// שמירת התוכן שנשלח בגוף הבקשה
        let arr = Object.keys(data);// מייצרת מערך של כל השדות שיש באובייקט
        for (let i = 0; i < arr.length; i++) {
            sql += `${arr[i]}='${data[arr[i]]}',`;// מעבר על כל רשימת השדות ויצירה של משפט עם ערכים לעדכון
        }
        sql = sql.substring(0, sql.length - 1);// בטל פסיק מיותר בסוף

        sql += ' Where uid=' + uid;
        mySqlDb.query(sql, (err, results, feilds) => {
            if (err == null) {
                console.log(results);
                return res.status(200).json(results);
            }
            else {
                console.log(err);
                return res.status(500).json({ 'error': err.message });

            }
        });
    },
    delete: (req, res) => {
        const uid = req.params.id;// קבלת קוד המוצר שנשלח
        const sql = `delete from t_user where uid=${uid}`;// שאילתה המחזירה את כל המוצרים
        mySqlDb.query(sql, (err, results, feilds) => {
            if (err == null) {
                console.log(results);
                return res.status(200).json(results);
            }
            else {
                console.log(err);
                return res.status(500).json({ 'error': err.message });

            }
        });
    }
}
