$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  

  
    
  })
  function clickedSleepButton() {
    
 
$(".pet-image").attr("src", "abir-sleep.gif");


  // Sleep Mode restores ABIR-X's happiness
  pet_info.happiness += 15;
  $('#robot-message').text('💤 ABIR-X: Sleep mode complete! Energy restored!');
  checkAndUpdatePetInfoInHtml();
}
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
  name: "ABIR-X",
  weight: 50,
  happiness: 50
};
    function clickedTreatButton() {
      
$(".pet-image").attr("src", "abir-treat.gif");

  // Recharge ABIR-X by increasing happiness and weight
  pet_info.happiness += 10;
  pet_info.weight += 5;
  $('#robot-message').text('⚡ ABIR-X: Energy restored! Thanks for the recharge!');

  checkAndUpdatePetInfoInHtml();
}
    
    function clickedPlayButton() {
      
$(".pet-image").attr("src", "abir-play.gif");

  // Playing makes ABIR-X happier but reduces weight
  pet_info.happiness += 10;
  pet_info.weight -= 5;
  $('#robot-message').text('🎮 ABIR-X: Gaming mode activated! This is awesome!');

  checkAndUpdatePetInfoInHtml();
}
    
    function clickedExerciseButton() {
      
$(".pet-image").attr("src", "abir-exercise.gif");

  // Exercising reduces ABIR-X's happiness and weight
  pet_info.happiness -= 10;
  pet_info.weight -= 5;
$('#robot-message').text('💪 ABIR-X: Training complete! I need some rest!');
  checkAndUpdatePetInfoInHtml();
}
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
   function checkWeightAndHappinessBeforeUpdating() {
  // Prevent weight from dropping below zero
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  // Prevent happiness from dropping below zero
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
}
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  
function animateRobot() {
  const robot = $(".pet-image");

  robot.removeClass("robot-moving");
  void robot[0].offsetWidth;
  robot.addClass("robot-moving");
}
