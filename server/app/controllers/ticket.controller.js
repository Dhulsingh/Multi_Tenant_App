require('dotenv').config({ path: '../../config.env'});
var jwt = require("jsonwebtoken");
var db=require('../models/dbmysql');


exports.getAll = (req, res) =>{
    let token = req.headers["x-access-token"];
    const data = req.body
    jwt.verify(token, process.env.secret, (err, decoded) => {
       db.con().query(`SELECT * FROM tickets WHERE ${data.type} = '${data.id}';`, function (err, result) {
        if (err) return res.status(500).json({success: false, message: err});
        res.status(200).json({success: true, data: result})
      });
  })
}

exports.check = (req, res) =>{
    let d = new Date();
    const data = req.body;
   var date = d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      if(data.user == null){
        date = data.date
        date = new Date(date)
        date = date.getFullYear()  + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      }
        db.con().query(`UPDATE tickets set updatedAt = '${date}', reviewed = '${data.user}' where id = '${req.params.id}';`, function (err, result) {
        if (err) return res.status(500).json({success: false, message: err});
        res.status(200).json({success: true, data: result})
      });
}

exports.assign = (req, res) =>{
    const data = req.body;
        db.con().query(`UPDATE tickets set assigned= '${data.assigned}', assignedBy= '${data.assignedBy}' where id = '${req.params.id}';`, function (err, result) {
        if (err) return res.status(500).json({success: false, message: err});
        res.status(200).json({success: true, data: result})
      });
}
<<<<<<< HEAD
=======

// exports.seeTick = (req, res) =>{
//   const data = req.body;
//       db.con().query(`UPDATE tickets set assigned= '${data.assigned}', assignedBy= '${data.assignedBy}' where id = '${req.params.id}';`, function (err, result) {
//       if (err) return res.status(500).json({success: false, message: err});
//       res.status(200).json({success: true, data: result})
//     });
// }
>>>>>>> 8e3f7f53d9979c5d6b3c340b06e35cbbf02b6339
