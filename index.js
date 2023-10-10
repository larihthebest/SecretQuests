var zoomLevel = 1;

document.getElementById('zoom-in-btn').addEventListener('click', function() {
  zoomLevel += 0.1;
  document.body.style.zoom = zoomLevel;
});

document.getElementById('zoom-out-btn').addEventListener('click', function() {
  zoomLevel -= 0.1;
  document.body.style.zoom = zoomLevel;
});

document.getElementById('reset-btn').addEventListener('click', function() {
  zoomLevel = 1;
  document.body.style.zoom = zoomLevel;
});