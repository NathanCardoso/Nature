let beforeDevice;
let currentDevice; 

$(document).ready(() => {
  
  // Commons
  screenHeight();
  backgroundImage();
  targetBlank();

  // Components
  tabNav()
  
  // Helpers
  currentDevice = device();
});

$(window).on('resize', () => {
  
  // Commons
  screenHeight();
  backgroundImage();
  
  // Helpers
  currentDevice = device();
  if (beforeDevice != currentDevice) {
    beforeDevice = currentDevice;
  }
});
