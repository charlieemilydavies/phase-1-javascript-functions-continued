function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("SUP Adventure");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

mondayWork();
mondayWork("go to a meeting");

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
