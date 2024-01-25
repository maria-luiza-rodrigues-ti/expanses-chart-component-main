export default function initClickBar() {}

setTimeout(() => {
  const barContainer = document.querySelectorAll(".bar");

  function handleClick(e) {
    e.preventDefault();
    const barValue = this.previousElementSibling;

    this.classList.toggle("active");
    barValue.classList.toggle("active-hover");
  }

  barContainer.forEach((barContainer) =>
    barContainer.addEventListener("click", handleClick)
  );
}, 500);
