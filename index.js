// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(block - 42);
  }

  function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
  }

  function distanceTravelledInFeet(start, area){
    return Math.abs(start - area) * 264;
  }
   function calculatesFarePrice(start, area){
    let distance = distanceTravelledInFeet(start, area);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else if (distance >= 2500) {
      return "cannot travel that far";
    }
   }