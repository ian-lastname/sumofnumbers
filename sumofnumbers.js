function sumFor(list) {
  let sum = 0;
  for (let index = 0; index < list.length; index++) {
    sum += list[index];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let index = 0;
  while (index < list.length) {
    sum += list[index];
    index++;
  }
  return sum;
}

function sumRecursion(list, index) {
  let sum;
  if (index > list.length) {
    return sum;
  }
  else {
    sum += list[index];
    return sumRecursion(list, index++);
  }
}

function theSimpleWay(list) {
  let sum;
  return _.map(list, function(num) { return sum + num;})
}
