function decodeUplink(input) {
  var data = {};
  data.longitude = getRandomArbitrary(3794435,4860660)/1000000;
  data.latitude = getRandomArbitrary(50555735,51000000)/1000000;
  if(input.bytes[2] > 250){
    data.CO2 = (input.bytes[2] - 250) * 12000
  }else{
    data.CO2 = input.bytes[2]*20;
  }
  data.NO2 = input.bytes[0]/10;
  data.VOC = input.bytes[1]*2;
  return {
    data: data
  };
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
