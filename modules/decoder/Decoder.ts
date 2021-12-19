export class Decoder {
  private encodingDictionary: Record<string, number> = {};

  constructor(
    private encoding: string,
    private value: string,
  ) {}

  decodeValue(): string {
    let response = '';
    this.resolveEncoding();
    const valueDigits = this.value.split('');

    valueDigits.forEach(value => response += this.encodingDictionary[value]);

    return response;
  }

  private resolveEncoding() {
    const encodingValues = this.encoding.split('');
    encodingValues.forEach((value, index) => this.encodingDictionary[value] = index);
  }
}
