const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(
  path.dirname(require.main.filename),
  "datas",
  "videoList.json"
);

module.exports=class VideoList{
  static fetchAll(cb){
    fs.readFile(DATA_PATH,(err,fileContent)=>{
      let videoList=[]
      if(!err){
        videoList=JSON.parse(fileContent)
      }

      cb(videoList)
    })
  }
}