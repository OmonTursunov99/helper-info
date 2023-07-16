type TypeZeroValue = number;
type TypeZeroReturn = string;
type TypeNowReturn = string;

function zero(value: TypeZeroValue): TypeZeroReturn {
  if (value < 10) {
    return `0${value}`;
  } else {
    return value.toString();
  }
}

function now(): TypeNowReturn {
  const D = new Date();
  const YEAR = D.getFullYear();
  const MONTH = D.getMonth() + 1;
  const DAY = D.getDate();
  const HOUR = D.getHours();
  const MINUTE = D.getMinutes();
  return `${YEAR}-${zero(MONTH)}-${zero(DAY)}T${zero(HOUR)}:${zero(MINUTE)}`;
}
