import { debounce, throttle } from 'lodash';

function inputWrite(input: HTMLInputElement) {
  console.log('val:', input.value);
}

const inputDebounce = debounce(inputWrite, 1000);
const inputTrolttle = throttle(inputWrite, 1000);

const exampleDebounseFn = debounce((input: HTMLInputElement) => {
  console.log('exampleDebounseFn --> ' + input.value);
}, 500)
