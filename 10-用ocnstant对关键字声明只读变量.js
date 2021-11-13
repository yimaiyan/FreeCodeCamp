function printManyTimes(str) {

  // 只修改这一行下面的代码

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // 只修改这一行上面的代码

}
printManyTimes("freeCodeCamp");