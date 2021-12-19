import { Decoder } from "./Decoder"

describe('Decoder', () => {
  it('should initialise a Decoder', () => {
    const decoder = new Decoder('someEncoding', 'someValue');

    expect(decoder).toBeInstanceOf(Decoder)
  })

  it('should return 23 if encoding is "asdf" and value is "df"', () => {
    const encoding = "asdf";
    const value = "df";
    const decoder = new Decoder(encoding, value);

    const result = decoder.decodeValue();

    expect(result).toBe("23");
  })
})
