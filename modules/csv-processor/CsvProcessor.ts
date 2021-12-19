import { parseFile } from '@fast-csv/parse';
import { Decoder } from '../decoder/Decoder';

export class CsvProcessor {
  constructor(
    private route: string,
    private delimiter: string,
    private includesHeader: boolean = false,
  ) {}

  processFile() {
    parseFile(this.route, {
      delimiter: this.delimiter,
      headers: this.includesHeader,
    }).on('data', row => {
      const values = row[0].split(',');
      const decoder = new Decoder(values[1], values[2]);
      console.log(`Player ${values[0]} score is ${decoder.decodeValue()}`);
    }).on('end', () => {
      console.log('File processed')
    }).on('error', (err) => {
      console.log(err.message);
      process.exit(0);
    })
  }
}
