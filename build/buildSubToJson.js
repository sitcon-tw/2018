var request = require('request');
var fs = require('fs');
const csv=require('csvtojson')
const path = require('path')

var result = []
var rows = 0
var headers = []

var autoConvert = function (value) {
    if (value === 'true' || value=== 'false') {
        return (value == 'true')
    } else if (!isNaN(parseFloat(value)) && parseFloat(value).toString() === value) {
        return parseFloat(value)
    } else {
        return value
    }
}

csv({
  noheader:true,
  trim:true,
})
.fromStream(request.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSD86rnnGsPpfQf8RyRdNKMg29Vm8hmFn-7QOtMb-0P_asyoolb_pcVqI-vWFb60j7M7lcUnOS0G96m/pub?gid=0&single=true&output=csv'))
.on('csv',(csvRow)=>{
    // csvRow is an array
    if (rows === 0) {
        headers = csvRow
    } else if (rows !== 1) {
        var obj = {}
        var objPro = {}
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].indexOf('/') === -1) {
                if (headers[i] === 'broadcast') {
                    if (csvRow[i]!=='')
                        obj[headers[i]] = csvRow[i].split(',')
                } else {
                    obj[headers[i]] = autoConvert(csvRow[i])
                }
            } else {
                if (objPro[headers[i].split('/')[0]] === undefined) objPro[headers[i].split('/')[0]] = {}
                if (headers[i].split('/')[1] === 'avatar') {
                  if (csvRow[i] === '')  objPro[headers[i].split('/')[0]][headers[i].split('/')[1]] = 'https://sitcon.org/2018/static/img/staffs/stone.png'
                  else objPro[headers[i].split('/')[0]][headers[i].split('/')[1]] = 'https://sitcon.org/2018/static/img/speaker/' + csvRow[i]
                } else objPro[headers[i].split('/')[0]][headers[i].split('/')[1]] = autoConvert(csvRow[i])
            }
        }
        for (let item in objPro) {
            obj[item] = objPro[item]
        }
        result.push(obj)
    }
    rows++
})
.on('done',(error)=>{
    fs.writeFile(path.resolve(__dirname, '../static/json/submissions.json'), JSON.stringify(result), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
})


