//   jug Rotation

var jug = document.getElementById('rotating-image');
var viewportHeight = window.innerHeight;
var jugHeight = jug.getBoundingClientRect().height;
var jugBottom = viewportHeight - jugHeight;

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY;
  var rotationAngle = (scrollPos / jugBottom) * -70;



  // show coffee image when jug rotates

  if (rotationAngle <= -45) {
    document.getElementById('serving-tea').style.display = 'block';
  } else {
    document.getElementById('serving-tea').style.display = 'none';
  }

  if (rotationAngle > 70) { 
    rotationAngle = 70;
  } else if (scrollPos == -0) { 
    rotationAngle = -0;
  }

  if (rotationAngle <= -50) {
    document.getElementById('rotating-image').rotationAngle(-0)
    document.getElementById('serving-tea').style

  } else {
    document.getElementById('rotating-image')
    document.getElementById('rotating-image').style.display = 'block'
  }
  jug.style.transform = 'rotate(' + rotationAngle + 'deg)';
});




//  contact form submit button 

function submit() {
  do {
    var tableNumber = Math.floor(Math.random() * 15) + 1;
  } while (tableNumber === 0);
  alert("Your table number is " + tableNumber);
}
