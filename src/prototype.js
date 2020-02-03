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
      console.log();
      // alert(e.target.value);
      console.log(input);
    }
  };

  let sugesstedItem = e => {
    inp.value = e.target.innerText;
    sugpannel.innerHTML = "";
    inp.focus();
  };

  sugpannel.addEventListener("click", sugesstedItem);
  inp.addEventListener("keyup", findDo);
};
export default prototype;
