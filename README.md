# decode-kata
### How to initialise
```
git clone https://github.com/DMarinsa/decode-kata
cd decode-kata
npm install
```
### How to execute
This projects includes ts-node and ts-jest in order to execute both project and tests. Additionally the given csv input file was included as well.
 - To execute tests run `npm run test`
- To execute the project run `npm start`
### Some considerations taken
As the information of the kata wasn't clear enough, An asumption was made that for each encoding the encoded value was taken in order and 0 based. For example, if encoding is `asdf` the value will be `0123`
