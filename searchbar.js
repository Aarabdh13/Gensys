const searchBox = document.getElementById("searchBox");
const suggestions = document.getElementById("suggestions");

searchBox.addEventListener("input", function () {
  if (searchBox.value === "") {
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    return;
  }

  suggestions.style.display = "block";
  suggestions.innerHTML = `
    <li>Result for "${searchBox.value}"</li>
    <li>Result for "${searchBox.value}"</li>
    <li>Result for "${searchBox.value}"</li>
  `;
});
