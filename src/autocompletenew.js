let autocomplete = (input, suggest, dataArray) => {
  let selectedSuggestionIndex = -1;
  let resetSelectedSuggestion = () => {
    for (let i = 0; i < suggest.children.length; i++) {
      suggest.children[i].classList.remove("selected");
    }
  };

  let searchInput = e => {
    if (e.key === "ArrowDown") {
      resetSelectedSuggestion();
      selectedSuggestionIndex =
        selectedSuggestionIndex < suggest.children.length - 1
          ? selectedSuggestionIndex + 1
          : suggest.children.length - 1;
      suggest.children[selectedSuggestionIndex].classList.add("selected");
      return;
    }
    if (e.key === "ArrowUp") {
      resetSelectedSuggestion();
      selectedSuggestionIndex =
        selectedSuggestionIndex > 0 ? selectedSuggestionIndex - 1 : 0;
      suggest.children[selectedSuggestionIndex].classList.add("selected");
      return;
    }
    if (e.key === "Enter") {
      if (input.value !== "") {
        input.value = suggest.children[selectedSuggestionIndex].innerHTML;
        suggest.classList.remove("show");
        selectedSuggestionIndex = -1;
        return;
      }
    }
    suggest.classList.add("show");
    const inputVal = input.value;
    suggest.innerHTML = "";
    const suggestList = dataArray.filter(item => {
      return item.toLowerCase().startsWith(inputVal.toLowerCase());
    });
    console.log(suggestList);
    suggestList.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = item;
      div.setAttribute("class", "suggestion-list");
      suggest.appendChild(div);
    });
    if (inputVal === "") {
      suggest.innerHTML = "";
    }
  };

  let selectSuggest = e => {
    if (e.target.className === "suggestion-list") {
      input.value = e.target.innerHTML;
      suggest.classList.remove("show");
    }
  };

  input.addEventListener("keyup", searchInput);
  document.addEventListener("click", selectSuggest);
};

export default autocomplete;
