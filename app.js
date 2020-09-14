const expreess=require('express')
const fs = require('fs');

let inof_Array = ["amirmahdi", "saadati", "09335403572"];

fs.writeFile ("input.json", JSON.stringify(inof_Array), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

fs.readFile('input.json', 'utf8', function(err, data){ 
      
    console.log(data); 
}); 