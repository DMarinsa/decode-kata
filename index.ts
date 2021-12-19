import { CsvProcessor } from "./modules/csv-processor/CsvProcessor";

(() => {
  const delimiter = process.env.DELIMITER || '"';
  const route = process.env.ROUTE || 'input.csv';
  const batchSize = (process.env.BATCH_SIZE) ? parseInt(process.env.BATCH_SIZE) : 5;
  const includesHeader = process.env.INCLUDES_HEADER === 'true';

  const fileProcessor = new CsvProcessor(route, batchSize, delimiter, includesHeader);

  fileProcessor.processFile();
})();
