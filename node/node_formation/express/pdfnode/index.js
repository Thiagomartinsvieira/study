const pdf = require("puppeteer")
const ejs = require('ejs')
const fs = require('fs')

const username = "Thiago"
const course = "Node formation"
const category = "javaScript"

const templatePath = "./index.ejs"

const template = fs.readFileSync(templatePath, 'utf8');

const renderedHtml = ejs.render(template, {username, course, category})

const pdfOptions = {
    format: 'A4',
    margin: {
        top: '20px',
        bottom: '40px',
        left: '20px',
        right: '20px'
    },
    path: './mypdf.pdf' 
};


pdf
    .launch()
    .then(async browser  => {
        const page = await browser.newPage()
        await page.setContent(renderedHtml)
        await page.pdf(pdfOptions)
        console.log("successfully generated")
    }).catch(error => {
        console.log(error)
    })

