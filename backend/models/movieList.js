const fs = require("fs");
const path = require("path");
const main = require('require-main-filename')()


const DATA_PATH = path.join(
  path.dirname(main),
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