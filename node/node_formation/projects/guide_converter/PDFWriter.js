const pdf = require('html-pdf');

class PDFWriter {
  static writePDF(filename, html) {
    const pdfOptions = {
        env: {
            OPENSSL_CONF: '/dev/null',
        },
    };
    
    const pdfStream = pdf.create(html, pdfOptions);

    pdfStream.toFile(filename, { timeout: 10000 }, (error, response) => {
        if (error) {
          console.error(`Error writing PDF file '${filename}':`, error);
        } else {
          console.log(`PDF file '${filename}' written successfully. Response:`, response);
        }
      });
      
      pdfStream.on('error', (error) => {
        console.error('PDF creation error:', error);
      });
      
      pdfStream.on('close', () => {
        console.log('PDF stream closed');
      });
      
  }
}

module.exports = PDFWriter;
