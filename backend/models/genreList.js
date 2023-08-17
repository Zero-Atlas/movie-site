const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(
  path.dirname(require.main.filename),
  "datas",
  "genreList.json"
);

module.exports=class GenreList{
  static fetchAll(cb){
    fs.readFile(DATA_PATH,(err,fileContent)=>{
      let genreList=[]
      if(!err){
        genreList=JSON.parse(fileContent)
      }

      cb(genreList)
    })
  }
}