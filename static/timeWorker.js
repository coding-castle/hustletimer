let interval;
this.onmessage = function(event) {
  if (event.data[0] === "start") {
    let currentTime = event.data[1];
    clearInterval(interval);
    interval = setInterval(() => {
      currentTime--;
      postMessage(currentTime);
    }, 1000);
  } else if (event.data[0] === "stop") {
    clearInterval(interval);
  }
};
