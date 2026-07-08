const bcrypt=require('bcrypt');//קישור לספריית ביקריפט
const pass="xyzcccc";
const roundSalt=10;


bcrypt.hash(pass,roundSalt).then((hashPass)=>{

console.log(hashPass);


});


let hashPass="$2b$10$QUuBF9U4/D9FcZTbjJ0iyu5I9K0X51VlFub2jgXsvKyOkwvrSSou";
bcrypt.compare(pass,hashPass).then((status)=>{

    if(status)
        console.log('Good');
    else
        console.log('Not Good');
});
// console.log(cc);
// let xxx=bcrypt.hashSync(pass,roundSalt);