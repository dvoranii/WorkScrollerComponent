const scroller = document.querySelector(".scroller-outer");
scroller.addEventListener("mousemove", (e) => {
  const width = scroller.clientWidth;
  const offset = (e.pageX - scroller.offsetLeft) / width;
  scroller.style.setProperty("--width", `${width}px`);
  scroller.style.setProperty("--offset", offset);
});
