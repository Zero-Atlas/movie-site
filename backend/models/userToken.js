const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(
  path.dirname(require.main.filename),
  "datas",
  "userToken.json"
);

module.exports=class UserToken{
  static fetchAll(cb){
    fs.readFile(DATA_PATH,(err,fileContent)=>{
      let userToken=[]
      if(!err){
        userToken=JSON.parse(fileContent)
      }

      cb(userToken)
    })
  }
}