(d => {
  const word = d.querySelector(".word");

  const shadow = e => {
    const { x, y } = e;
    const gBCR = word.getBoundingClientRect();
    const w = this;
    const xM = (x - gBCR.left - gBCR.width / 2) / gBCR.width * 5;
    const yM = (y - gBCR.top - gBCR.height / 2) / gBCR.height * 5;
    
    transform(xM, yM);
  };

  const transform = (x, y) => {
    word.style.textShadow = `${x}px ${-y}px 0px rgb(100, 149, 237, 0.7),
                             ${-x}px ${y}px 0px rgb(240, 128, 128, 0.7),
                             ${y}px ${-x}px 0px rgb(255, 255, 240, 0.7),
                             ${-y}px ${x}px 0px rgb(100, 149, 237, 0.7)`;
  }
  <!--//파랑, 핑크, 초록-->

  window.addEventListener("mousemove", shadow);
})(document);