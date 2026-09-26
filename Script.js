const video = document.getElementById('camera-feed');

// Request access to the smartphone's rear camera
navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: { ideal: "environment" } // Forces the back camera
    },
    audio: false
})
.then((stream) => {
    video.srcObject = stream;
})
.catch((err) => {
    alert("Camera access denied or browser not supported.");
});
