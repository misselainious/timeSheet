var config = {
  apiKey: "AIzaSyBUnh1Df1Yj9F4daisdNa5D1hpD8Ug7EoE",
  authDomain: "timesheet-41743.firebaseapp.com",
  databaseURL: "https://timesheet-41743.firebaseio.com",
  projectId: "timesheet-41743",
  storageBucket: "timesheet-41743.appspot.com",
  messagingSenderId: "831798872280"
};

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var rate = "";

$("#submit").on("click", function(event) {
  
  event.preventDefault();
  
  name = $('#nametext').val().trim();
  role = $('#roletext').val().trim();
  startDate = $('#datetext').val().trim();
  rate = $('#ratetext').val().trim();

  var formatstartDate = moment(startDate).format('MM/DD/YYYY');
  var today = moment().format('MM/DD/YYYY');
  var tenure = moment.duration(today.diff(formatstartDate));
  console.log(tenure);
  
  console.log(name);
  console.log(role);
  console.log(startDate);
  console.log(rate);

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

  })
  var nametd = $("<td>").text(name);
  var roletd = $("<td>").text(role);
  var startDatetd = $("<td>").text(startDate);
  var ratetd = $("<td>").text(rate);

  var newRow = $("<tr>");

  $("<tr>").append(nametd);
  $("<tr>").append(roletd);  
  $("<tr>").append(startDatetd);
  $("<tr>").append(ratetd);

$(".table").append(newRow);

});

database.ref().on("child_added", function(childSnapshot){
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().role);
  console.log(childSnapshot.val().startDate);
  console.log(childSnapshot.val().rate);
  
})





