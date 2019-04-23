const csvFilePath='sec_bhavdata_full.csv'
const csv=require('csvtojson')
const fs=require('fs')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    fs.writeFile('bhavdata.json', JSON.stringify(jsonObj), function (err, file) {
        if (err) console.log(err);
        console.log(JSON.stringify(jsonObj));
      })
    });