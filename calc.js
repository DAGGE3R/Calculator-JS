let curr = null,
  pred = 0,
  currOp = "";

let DoOp = (op) => {
  currOp = op;
  switch (op) {
    case "+":
      pred += curr;
      curr = 0;
      document.getElementById("res").innerText = pred;
      document.getElementById("current").innerText = "";
      break;
    case "-":
      if (pred == 0) {
        pred = curr;
      } else pred -= curr;
      curr = 0;
      document.getElementById("res").innerText = pred;
      document.getElementById("current").innerText = "";
      break;
    case "*":
      if (pred == 0) {
        pred = 1;
      }
      pred *= curr;
      curr = 0;
      document.getElementById("res").innerText = pred;
      document.getElementById("current").innerText = "";
      break;
    case "/":
      if (curr != 0) {
        if (pred == 0) {
          pred = curr;
        } else pred /= curr;
        curr = 0;
        document.getElementById("res").innerText = pred;
      }
      document.getElementById("current").innerText = "";
      break;

    default:
      break;
  }
};

const OpCont = document.getElementById("op");
OpCont.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    DoOp(child.innerHTML);
  });
});

const Numb = document.getElementById("calc");
Numb.childNodes.forEach((child) => {
  child.addEventListener("click", () => {
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
        child.innerHTML
      )
    ) {
      if (!curr) {
        curr = 0;
      }
      curr = Number.parseInt(curr + child.innerHTML);
      document.getElementById("current").innerText = curr;
    } else if (child.innerHTML == "=") {
      DoOp(currOp);
    } else if (child.innerHTML == "c") {
      curr = null;
      pred = 0;
      currOp = "";
      document.getElementById("res").innerText = pred;
      document.getElementById("current").innerText = "";
    }
  });
});
