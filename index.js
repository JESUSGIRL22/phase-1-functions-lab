function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    let fare;
    if (distanceInFeet <= 400) {
      fare = 0;
    } else if (distanceInFeet <= 2000) {
      fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
    return fare;
  }
  