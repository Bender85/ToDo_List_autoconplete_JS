const prototype = (inp, sugpannel, source) => {
  let findDo = e => {
    const input = inp.value;
    sugpannel.innerHTML = "";

    const sugesstions = source.filter(item => {
      return item.toLowerCase().startsWith(input);
    });
    sugesstions.forEach(suggestedItem => {
      const div = document.createElement("div");
      div.innerHTML = suggestedItem;
      sugpannel.appendChild(div);
    });
    if (input === "") {
      sugpannel.innerHTML = "";
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      alert(e.target.value);
    }
  };

  let sugesstedItem = e => {
    console.log(this);
    inp.value = e.target.innerText;
    sugpannel.innerHTML = "";
    sugpannel.focus();
  };

  inp.addEventListener("keyup", findDo);
  sugpannel.addEventListener("click", sugesstedItem);
};
export default prototype;
