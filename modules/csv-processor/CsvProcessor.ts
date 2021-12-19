import { parseFile } from '@fast-csv/parse';

export class CsvProcessor {
  constructor(
    private route: string, 
    private batchSize: number, 
    private delimiter: string,
    private includesHeader: boolean = false,
  ) {}

  processFile() {
    parseFile(this.route, {
      delimiter: this.delimiter,
      headers: this.includesHeader,
      maxRows: this.batchSize,
    }).on('data', row => {
      const values = row[0].split(',');
      // use decoder;
    }).on('end', () => {
      console.log('File processed')
    }).on('error', (err) => {
      console.log(err.message);
      process.exit(0);
    })
  }
}
