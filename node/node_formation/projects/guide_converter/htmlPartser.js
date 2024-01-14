var ejs = require('ejs');

class htmlParser {
  static async parse(table) {
    // Use await when calling ejs.renderFile and return the result
    return await ejs.renderFile('./table.ejs', { header: table.header, rows: table.rows });
  }
}

module.exports = htmlParser;
