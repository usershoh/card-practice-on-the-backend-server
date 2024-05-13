let input = document.querySelector("input"),
  btn1 = document.querySelector("#btn1"),
  todo_bottom = document.querySelector(".todo_bottom"),
  closed = document.querySelector(".closed");

btn1.addEventListener("click", () => {
  let p = document.createElement("p");
  let item = document.createElement("div");
  let btn2 = document.createElement("button");
  btn2.style.cssText = "display: block; width: 50px; height: 50px;";
  btn2.textContent = "remove";
  btn2.setAttribute("class", "closed");
  p.textContent = input.value;
  item.setAttribute("class", "todo_item");
  item.prepend(p, btn2);
  todo_bottom.append(item);
  input.value = "";

  if (p.textContent.length > 32) {
    p.textContent = "error, you make all simvols";
  }

  if (
    btn2.addEventListener("click", () => {
      item.remove();
    })
  );   
});
