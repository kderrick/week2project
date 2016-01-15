$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    person1Input = $("input#person1").val();
    $(".person").text(person1Input);

    var temperature = $('input[name=question1radio]:checked').val();
    var attitude = $('input[name=question2radio]:checked').val();
    var health = $('input[name=question3radio]:checked').val();
    var activity = $('input[name=question4radio]:checked').val();
    var clothing = $('input[name=question5radio]:checked').val();
    var beverage = $('input[name=question6radio]:checked').val();
    var annoying = $('input[name=question7radio]:checked').val();

    var questions = [temperature, attitude, health, activity, clothing, beverage, annoying];

    var beach = 0;
    var city = 0;
    var mountain = 0;

    questions.forEach(function(question) {
      if (question === 'answer1') {
        beach++;
      } else if (question === 'answer2') {
        city++;
      }else {
        mountain++;
      }
    });

    if((beach > city) && (beach > mountain)) {
      $("#warm-beach").fadeIn('slow');
      $("#coldmountain").hide("#coldmountain");
      $("#temperatecity").hide("#temperatecity");
    } else if ((city > beach) && (city > mountain)) {
      $("#temperatecity").fadeIn('slow');
      $("#warm-beach").hide("#warm-beach");
      $("#coldmountain").hide("#coldmountain");
    } else {
      $("#coldmountain").fadeIn('slow');
      $("#warm-beach").hide("#warm-beach");
      $("#temperatecity").hide("#temperatecity");

    };

    event.preventDefault()

  });

});
