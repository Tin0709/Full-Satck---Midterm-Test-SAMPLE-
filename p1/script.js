document
  .getElementById("genderForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    if (!name) return;

    const resultElement = document.getElementById("result");

    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();

      if (data.gender) {
        resultElement.textContent = `Gender: ${data.gender}`;
        resultElement.className = data.gender === "male" ? "male" : "female";
        resultElement.style.display = "block";
      } else {
        resultElement.textContent = "Gender could not be determined.";
        resultElement.style.display = "block";
        resultElement.className = "";
      }
    } catch (err) {
      resultElement.textContent = "Error fetching gender information.";
      resultElement.style.display = "block";
      resultElement.className = "";
    }
  });
