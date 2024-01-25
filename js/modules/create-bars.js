export default function initBars() {
  const barContainer = document.querySelector(".graphic_container");

  function fetchData() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((bars) => {
        bars.forEach((bar) => {
          const div = createBar(bar);
          barContainer.appendChild(div);
        });
      })
      .catch((error) => console.log(Error(error)));
  }

  function createBar(bar) {
    const div = document.createElement("div");

    div.classList.add("bar-container");

    div.innerHTML = `<span class="bar_value">$${bar.amount}</span>
    <div class="bar" style="height:${bar.height}px;"></div>
    <span class="bar_subtitle">${bar.day}</span>`;

    return div;
  }

  fetchData();
}
