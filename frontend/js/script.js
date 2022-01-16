class Lecture {
  constructor(name, day, starttime, endtime) {
    this.name = name;
    this.day = day;
    this.starttime = starttime;
    this.endtime = endtime;
  }
}

var lectures = [];

function addLecture() {
  const name = document.querySelector("#name").value;
  const day = document.querySelector("#dotw").value;
  const starttime = document.querySelector("#start").value;
  const endtime = document.querySelector("#end").value;
  console.log(
    "Name value = " +
      name +
      "\nDay Value = " +
      day +
      "\nStart time Value = " +
      starttime +
      "\nEnd time value = " +
      endtime
  );
  var element = new Lecture(name, day, starttime, endtime);
  lectures.push(element);
  console.log(JSON.stringify(element));
  console.log("Entire lectures : " + JSON.stringify(lectures));
  document.getElementById('lectures').innerHTML += ('<ul>'+JSON.stringify(element)+'</ul>');
}

async function sendtoapi() {
  console.log("running calculator");

  fetch("../lectures", {
    method: "POST",
    body: JSON.stringify(lectures),
  })
    .then((response) => {
        console.log(response);
        return response.json()})
    .then((data) => {
        console.log(data);
        document.getElementById('results').innerHTML = JSON.stringify(data);
    });
  // fetch("/items/1234", {
  //   method: "POST",
  //   body: JSON.stringify({input: lectures}),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
}

document.querySelector("#add-lecture").addEventListener("click", addLecture);
document.querySelector("#submit").addEventListener("click", sendtoapi);
