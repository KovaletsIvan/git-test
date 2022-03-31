const grid = (num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const arrToShow = [];

  for (let i = 0; i < num; i++) {
    alphabet.slice(i, num + i).length < num
      ? arrToShow.push(
          alphabet
            .slice(i, num + i)
            .concat(alphabet.slice(0, num - alphabet.slice(i, num + i).length))
            .join(" ")
        )
      : arrToShow.push(alphabet.slice(i, num + i).join(" "));
  }
  return arrToShow.join("\n");
};