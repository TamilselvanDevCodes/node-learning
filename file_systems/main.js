const fileHandler=require("./crud");
const path=require("path");

const filePath=path.join(__dirname,'files');

//fileHandler.appendData(filePath,"file1.txt",'hi');

// const data=fileHandler.readData(path.join(filePath,'file1.txt'));
// console.log(data);

const writeStream=fileHandler.writeDataAsStream(filePath,'file1.txt');
console.log(writeStream);