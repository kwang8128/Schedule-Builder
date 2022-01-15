async function calculate() {
  console.log("running calculator");
  
  fetch("../test/1234", {
      method:'POST',
      body: JSON.stringify({input: "Hello"})
  })
  .then(response => response.json())
  .then(data => console.log(data));
}
