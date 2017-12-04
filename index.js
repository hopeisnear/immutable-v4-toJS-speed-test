const Immutable = require('immutable');
const largeJson = require('./largeJson.json');

const largeJsonImmutable_v4 = Immutable.fromJS(largeJson);

console.time('TOTAL toJS');
for (let i=0; i<30; i++) {
  console.time('toJS_' + i);
  largeJsonImmutable_v4.toJS();
  console.timeEnd('toJS_' + i);
}
console.timeEnd('TOTAL toJS');