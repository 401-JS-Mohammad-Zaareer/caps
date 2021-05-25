'use strict';

function timeStamp() {
  const date = new Date();
  const day = `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
  const time = `${date.getHours()}:${(date.getMinutes())}:${date.getSeconds()}.${date.getMilliseconds()}`;
  return `${day} T${time}Z`;
}
module.exports = timeStamp;