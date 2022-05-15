import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor() {

  }

  load(buffer) {
  	return buffer;
  }

  toString() {
  	const buf = new Uint16Array(this.load(getBuffer()));
  	let result = '';
  	for(let i = 0; i < buf.length; i++) {
  	  result += (String.fromCharCode(buf[i]));
  	}
  	return result;
  }
}
