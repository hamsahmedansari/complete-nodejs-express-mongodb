console.log("this a test of serving js file at client side");
const fetchDefinition = () => {
  const textbox = document.getElementById("txtWord");
  const word = textbox.value;
  textbox.value = "";
  document.getElementById("h1Word").textContent = "";
  document.getElementById("h3Definition").textContent = "Fetching data...";

  const url = "http://localhost:3000/search?word=" + word;
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(res => {
      if (res.error) {
        document.getElementById("h3Definition").textContent = res.error;
      } else {
        document.getElementById("h1Word").textContent = res.data.word;
        document.getElementById("h3Definition").innerHTML = res.data.definition;
      }
    })
    .catch(e => {
      document.getElementById("h3Definition").innerHTML = e;
    });
};
