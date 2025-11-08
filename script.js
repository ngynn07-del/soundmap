const sounds = {
  icon1: new Audio("sound1.m4a"),
  icon2: new Audio("sound2.m4a"),
  icon3: new Audio("sound3.m4a")
};

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const sound = sounds[icon.id];
    if (sound) {
      Object.values(sounds).forEach(s => {
        s.pause();
        s.currentTime = 0;
      });
      sound.play();
    }
  });
});