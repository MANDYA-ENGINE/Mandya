// Redirect function to open video links
function redirect(url) {
    window.open(url, "_blank");
  }
  
  // Save watched state in local storage
  function saveState(isWatched, videoId) {
    localStorage.setItem(`video-${videoId}-watched`, isWatched);
  }
  
  // Load saved watched state (can be called on page load if needed)
  document.querySelectorAll(".video-card").forEach((card, index) => {
    const isWatched = localStorage.getItem(`video-${index + 1}-watched`);
    if (isWatched === "true") {
      card.querySelector("input[type=checkbox]").checked = true;
    }
  });