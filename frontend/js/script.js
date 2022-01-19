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
  document.getElementById('lectures').innerHTML += ('<ul>' +  
  element.name +
  ": " +
  element.day +
  " " +
  element.starttime +
  " - " +
  element.endtime + '</ul>');
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
        document.getElementById('results').innerHTML = '';
        document.getElementById('results').innerHTML += 'Minimum number of classes: ' + data[1];
        data[0].forEach(element => {
          console.log(element.classroom);
          if (document.getElementById("Room " + element.classroom) == null)
          {
            document.getElementById('results').innerHTML += ('<ul id=\"Room ' + element.classroom + '\">' + 'Room ' + element.classroom + '<ul>');
          }
            document.getElementById('Room ' + element.classroom).innerHTML += ('<ul>' + 
            element.name +
            ": " +
            element.day +
            " " +
            element.starttime +
            " - " +
            element.endtime) + '</ul>';
          
        });
        
  // fetch("/items/1234", {
  //   method: "POST",
  //   body: JSON.stringify({input: lectures}),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
});
}

document.querySelector("#add-lecture").addEventListener("click", addLecture);
document.querySelector("#submit").addEventListener("click", sendtoapi);
