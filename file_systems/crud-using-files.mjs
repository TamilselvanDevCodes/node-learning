import * as fileHandler from 'node:fs/promises';

//To open a directory
try {
    const dir = await fileHandler.opendir('D:\\');
    console.log(dir);
} catch (err) {
    console.error(err);
}

console.log('------------'.repeat(5));

try {
    let data="Warner!";
    let file=await fileHandler.writeFile('D:\\file1.txt',data);

} catch (e) {
    console.log(e);
}
