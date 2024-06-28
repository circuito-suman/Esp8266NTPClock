// Add event listener to pictures
document.querySelectorAll(".picture").forEach((picture) => {
  picture.addEventListener("click", () => {
    // Open the picture in a new tab when clicked
    window.open(picture.src, "_blank");
  });
});

// Add event listener to video
document.querySelector(".video").addEventListener("click", () => {
  // Play the video when clicked
  document
    .querySelector(".video")
    .contentWindow.postMessage(
      '{"event":"command","func":"' + "playVideo" + '","args":""}',
      "*"
    );
});
