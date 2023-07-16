import { debounce, throttle } from 'lodash';

function inputWrite(input) {
  console.log('val:', input.value);
}

const inputDebounce = debounce(inputWrite, 1000);
const inputTrolttle = throttle(inputWrite, 1000);

const exampleDebounseFn = debounce((input) => {
  console.log('exampleDebounseFn --> ' + input.value);
}, 500)
