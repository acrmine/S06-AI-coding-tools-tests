import "./style.css";

document.body.innerHTML = `
  <div id="counter-container" style="margin-top:12px;">
    <button id="inc-btn">Click me</button>
    <span id="count" style="margin-left:8px;font-weight:600">0</span>
  </div>
`;

const button = document.getElementById("inc-btn") as HTMLButtonElement | null;
const countSpan = document.getElementById("count") as HTMLElement | null;
let count = 0;

if (button && countSpan) {
  button.addEventListener("click", () => {
    count++;
    countSpan.textContent = String(count);
  });
}
