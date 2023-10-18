document.getElementById("jokeButton").addEventListener("click", function () {
  const jokeResult = document.getElementById("jokeResult");

  const jokeApiEndpoint = "https://api.api-ninjas.com/v1/jokes?limit=1"; 
  const headers = {
    "X-Api-Key": "nP9WlNe/Neif//5e3I9CGA==5AcVtHS9NqA6Exv7", 
  };

  fetch(jokeApiEndpoint, { headers })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const joke = data[0].joke;
        jokeResult.innerHTML = `
                    <h2>Joke</h2>
                    <p>${joke}</p>
                `;
      } else {
        jokeResult.innerHTML = "<p>No jokes found.</p>";
      }
    })
    .catch((error) => {
      jokeResult.innerHTML = "<p>Failed to fetch a joke.</p>";
    });
});
