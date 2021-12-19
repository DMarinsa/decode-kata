import { CsvProcessor } from "./modules/csv-processor/CsvProcessor";

(() => {
  const delimiter = process.env.DELIMITER || '"';
  const route = process.env.ROUTE || 'input.csv';
  const includesHeader = process.env.INCLUDES_HEADER === 'true';

  const fileProcessor = new CsvProcessor(route, delimiter, includesHeader);

  fileProcessor.processFile();
})();
