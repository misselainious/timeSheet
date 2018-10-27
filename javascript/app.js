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

  $("#submit").click(function(){

    event.preventDefault();

    name = $('#nametext').val().trim();
ole = $('#roletext').val().trim();
    startDate = $('datetext').val().trim();
    rate = $('#ratetext').val().trim();

    database.ref().push({
        name: name,
        role: role,
        startDate : startDate,
        rate: rate,
    
    })
  
    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);
    
    
    
    
var t = $(<tr>
    <th scope="row">1</th>
    <td>Mark</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
  </tr>
  <tr>
        <th scope="row">4</th>
        <td>Larry</td>
      </tr>);

t.name()
});


    

