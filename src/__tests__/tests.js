import ArrayBufferConverter from '../ArrayBufferConverter';

test('testing ABC', () => {
  const converter = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(converter.toString()).toEqual(data);
});
