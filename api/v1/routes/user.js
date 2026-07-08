//const express=require('express'); // חיבור לספריית אקספרס
const router=require('express').Router();// יצירת אוביקט של ראוטר עבור הניתובים
const userController=require('../controllers/user');// חיבור לקונטרול
// הפונקציה מקבלת שני פרמטרים, הראשון נתיב של הבקשה, והשני קוד שרת לביצוע המורכב מאוביקטים של בקשה ותשובה
router.get('/',userController.getAll);// בקשה בשיטת גט לשרת

router.get('/:id',userController.getById);
router.delete('/:id',userController.delete);

router.post('/',userController.add);

router.put('/:id',userController.update);

module.exports=router;// ייצוא של הראוטר