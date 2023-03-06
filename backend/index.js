const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

app.get('/',(req,res)=>{
    res.send('hi');
})
app.post('/upload', upload.single('file'), (req, res) => {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    let successful = [];
    let failed = [];
    data.forEach(async (item) => {
        await client.messages.create({
            body: Object.values(item)[6],
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+${Object.values(item)[5]}`
        }).then(() => {
            successful.push(item);
        }).catch((err) => {
            failed.push(item);
        })
    })
    console.log(successful, failed);
    res.json({ data });
});


app.listen(5000, () => {
    console.log('Server listening on port 3000');
});
