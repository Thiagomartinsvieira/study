const fs = require('fs');
const util = require('util');

class Writer {
  constructor() {
    this.writeFileAsync = util.promisify(fs.writeFile);
  }

  async write(filename, data) {
    try {
      await this.writeFileAsync(filename, data);
      console.log(`File '${filename}' written successfully.`);
      return true;
    } catch (error) {
      console.error(`Error writing file '${filename}':`, error);
      return false;
    }
  }
}

module.exports = Writer;
