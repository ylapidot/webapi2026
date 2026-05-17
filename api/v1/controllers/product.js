const mySqlDb=require('../models/mysqldb');
module.exports={
    getAll:(req,res)=>{
        const sql='select * from t_product';// שאילתה המחזירה את כל המוצרים
        mySqlDb.query(sql,(err,results,feilds)=>{
            if(err==null)
            {
                console.log(results);
                return res.status(200).json(results);
            }
            else
            {
                console.log(err);
                return res.status(500).json({'error':err.message});
                
            }
   });// הפעלת השאילתה וקבלת התוצאות בתוך פונקציית החזרה
//   return  res.status(200).json({msg:`All Products`});// החזרת תשובה של כל המוצרים
},
    getById:(req,res)=>{
    const pid=req.params.id;// קבלת קוד המוצר שנשלח
    return  res.status(200).json({msg:`Got product Id ${pid}  `});
},
    add:(req,res)=>{
    // הוספת מוצר חדש
    res.status(200).json({msg:req.body});
},
    update:(req,res)=>{
    const pid=req.params.id;// קבלת קוד המוצר לעדכון
    res.status(200).json({msg:`update product Id ${pid}  `});
},
    delete:(req,res)=>{
    const pid=req.params.id;// קבלת קוד המוצר למחיקה
    res.status(200).json({msg:`deleted product Id ${pid}  `});
}
};