let Reader = require('./Reader');
let Processor = require('./Processor');
const Table = require('./Table');
const htmlParser = require('./htmlPartser');
let PDFWriter = require('./PDFWriter');
let Writer = require('./Writer');

let reader = new Reader();
let writer = new Writer();

async function main() {
  let data = await reader.Read('./users.csv');
  let processedData = Processor.Processor(data);

  let users = new Table(processedData);

  users.rows.push(['John John', 'System analytics', 'Java', '23']);

  let html = await htmlParser.parse(users);

  writer.write(Date.now() + '.html', html);
  PDFWriter.writePDF(Date.now() + '.pdf', html);  // Changed the file extension to .pdf
}

main();
