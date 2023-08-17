const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(
  path.dirname(require.main.filename),
  "datas",
  "movieList.json"
);

module.exports=class MovieList{
  static fetchAll(cb){
    fs.readFile(DATA_PATH,(err,fileContent)=>{
      let movieList=[]
      if(!err){
        movieList=JSON.parse(fileContent)
      }

      cb(movieList)
    })
  }
}