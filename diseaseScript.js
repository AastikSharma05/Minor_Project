document.getElementById("searchButton").addEventListener("click", function () {
  const diseaseName = document.getElementById("diseaseInput").value;
  const diseaseResult = document.getElementById("diseaseResult");

  fetch("disease.json")
    .then((response) => response.json())
    .then((data) => {
      const diseases = data.diseases;
      const foundDisease = diseases.find(
        (disease) => disease.name === diseaseName
      );

      if (foundDisease) {
        const symptomsList = foundDisease.symptoms
          .map((symptom) => `<li>${symptom}</li>`)
          .join("");
        const treatmentsList = foundDisease.treatments
          .map((treatment) => `<li>${treatment}</li>`)
          .join("");

        diseaseResult.innerHTML = `
                    <h2>${foundDisease.name}</h2>
                    <p>${foundDisease.description}</p>
                    <h3>Symptoms:</h3>
                    <ul>${symptomsList}</ul>
                    <h3>Treatments:</h3>
                    <ul>${treatmentsList}</ul>
                `;
      } else {
        diseaseResult.innerHTML = "<p>Disease not found</p>";
      }
    })
    .catch((error) => {
      diseaseResult.innerHTML = "<p>Failed to fetch disease data.</p>";
    });
});
