const allPhones = [
  "iPhone 14",
  "iPhone 13",
  "Samsung Galaxy S23",
  "Samsung Galaxy A52",
  "Mi 11X",
  "Vivo V21",
  "Realme 8 Pro",
  "Oppo F19",
  "OnePlus 11",
  "Motorola G60",
  "Nokia 5.4",
  "Infinix Note 10 Pro",
];

function handleSearch() {
  const query = document.getElementById("phoneSearch").value.toLowerCase();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (query.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  const matches = allPhones.filter((phone) =>
    phone.toLowerCase().includes(query)
  );
  if (matches.length > 0) {
    matches.forEach((phone) => {
      const div = document.createElement("div");
      div.textContent = phone;
      div.onclick = () => {
        document.getElementById("phoneSearch").value = phone;
        suggestions.innerHTML = "";
        suggestions.style.display = "none";
      };
      suggestions.appendChild(div);
    });
    suggestions.style.display = "block";
  } else {
    const div = document.createElement("div");
    div.textContent = "No phones found.";
    suggestions.appendChild(div);
    suggestions.style.display = "block";
  }
}
