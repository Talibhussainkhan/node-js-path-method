
const path = require('path')
const fs = require('fs');

// join path method
const abc = path.join('folder', 'sub', 'file.txt');
console.log(abc)
// output : folder\sub\file.txt

const file = '/home/user/app/data.json';
console.log(path.dirname(file));   // /home/user/app
console.log(path.basename(file)); // data.json
console.log(path.extname(file));   // .json
console.log(path.parse(file)); // parsed object 
console.log(path.resolve(file)); // folder\sub\file.txt
// parse output = {
//   root: '/',
//   dir: '/home/user/app',
//   base: 'data.json',
//   ext: '.json',
//   name: 'data'
// }
console.log(path.join(__dirname, 'uploads'));


 // create folder on directory  { recursive: true } only used if folder have parent folder like example given dist/uploads;
 try {
    const uploadPath = path.join(__dirname, 'dist/uploads');
       if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
        console.log(`Folder '${uploadPath}' created.`);
    } else {
        console.log('Folder already exists:', uploadPath);
    }
    } catch (err) {
        console.error('Error creating folder:', err);
        return; 
    }

// another example but without parent folder
try {
    const uploadPath = path.join(__dirname, 'hello');
    if(!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath);
        console.log(`Folder '${uploadPath}' created.`);
    }else {
        console.log('Folder already exists:', uploadPath);
    }
} catch (error) {
    console.error('Error creating folder:', err);
        return;
}

// create file define folder if folder exist
fs.writeFile(path.join(__dirname,"hello/anotherFile.txt"), 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File created and content written!');

 });
