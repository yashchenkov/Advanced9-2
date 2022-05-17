import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor() {

  }

  load(buffer) {
  	return buffer;
  }

  toString() {
  	const buf = new Uint16Array(this.load(getBuffer()));
  	let result = String.fromCharCode(...buf);
  	return result;
  }
}
