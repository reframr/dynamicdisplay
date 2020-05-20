hidetitle();
function hidetitle() {
  video = document.getElementById("video");
	title = document.getElementById("title");
	if (!video.paused) {
	  title.style.display = "none";
	}
	if (video.paused) {
	  title.style.display = "block";
  }
	setTimeout(hidetitle, 1);
}
