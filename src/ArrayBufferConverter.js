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
    /*result = buf.reduce((elem1) => {
      String.fromCharCode(elem1);
    });*/
    /*buf.reduce((elem1, elem2) => {
      result += String.fromCharCode(elem1) + String.fromCharCode(elem2);
    });*/
  	for(let i = 0; i < buf.length; i++) {
  	  result += String.fromCharCode(buf[i]);
  	}
  	return result;
  }
}
