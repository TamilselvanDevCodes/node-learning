const fileHandler = require('node:fs');
const path = require('path');


function createDirectory(directoryPath) {
    if (!fileHandler.existsSync(directoryPath)) {
        fileHandler.mkdirSync(directoryPath);
    }
}

function appendData(directoryPath, fileName, data) {
    try {
        createDirectory(directoryPath);
        const filePath = path.join(directoryPath, fileName);
        fileHandler.appendFileSync(filePath, data, {encoding: 'utf8'});
        console.log("File saved successfully.");
    } catch (error) {
        console.error(error);
    }
}

function readData(directoryPath) {
    try {
        if (fileHandler.existsSync(directoryPath)) {
            let data = fileHandler.readFileSync(directoryPath, {encoding: 'utf8'});
            console.log('file read successful.');
            return data;
        }
        else{
            console.log('No directory found to read the file !');
        }
    } catch (error) {
        console.error(error);
    }
}
function writeDataAsStream(directoryPath, fileName) {
    try {
        createDirectory(directoryPath);
        const filePath = path.join(directoryPath, fileName);
        console.log("File Write Stream  started successfully.");
       return  fileHandler.createWriteStream(filePath,{encoding: 'utf8'});
    } catch (error) {
        console.error(error);
    }
}
function readDataAsStream(directoryPath, fileName) {
    try {
        createDirectory(directoryPath);
        const filePath = path.join(directoryPath, fileName);
        console.log("File Read Stream  started successfully.");
       return  fileHandler.createReadStream(filePath,{encoding: 'utf8'});

    } catch (error) {
        console.error(error);
    }
}

module.exports={createDirectory,appendData,readData,readDataAsStream,writeDataAsStream};



