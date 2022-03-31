 
const calculator = (str) => {
  const [firstEl, operator, secondEl] = str.split(" ");
  const first = firstEl.length;
  const second = secondEl.length;

  switch (operator) {
    case "+":
      return Array(first + second)
        .fill(".")
        .join("");
    case "-":
      return first >= second
        ? Array(first - second)
            .fill(".")
            .join("")
        : "";
    case "*":
      return Array(first * second)
        .fill(".")
        .join("");
    case "/":
      return first % second === 0
        ? Array(first / second)
            .fill(".")
            .join("")
        : "";
  }
};