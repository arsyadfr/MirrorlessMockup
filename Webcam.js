
document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var buts = document.getElementById('but2')
    var video = document.getElementById("vid");

    var mediaDevices = navigator.mediaDevices;
// navigator.mediaDevices.getUserMedia({video: "bccc718ff87ae774591d21062b98b609238fcbc78f1da644a16d1f84add19502"})
    vid.muted = true;

    // mediaDevices
    // .getUserMedia({
    //     video: true,
    //     audio: true,
    // })
    // .then((stream) => {

    //     // Changing the source of video to current stream.
    //     video.srcObject = stream;
    //     video.addEventListener("loadedmetadata", () => {
    //         video.play();
    //     });
    // })

    but.addEventListener("click", () => {
           
            mediaDevices
            .getUserMedia({
                video: true,
                audio: true,
            })
            .then((stream) => {

                // Changing the source of video to current stream.
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                    console.log(clicked)
                });})
            .catch(alert);
    });


buts.addEventListener('click', ()=>{
    // mediaDevices
    // .getUserMedia({
    //     video: false,
    //     audio: false,
    // })
    // .then((stream) => {
    //     console.log(clicked)
    //     // Changing the source of video to current stream.
    mediaDevices.getUserMedia({
        video: true,
        audio: true,
    }).then(stream=> stream.getTracks().forEach(s=> s.stop()))
        video.srcObject = null;
        video.addEventListener("loadedmetadata", () => {
            video.stop();
        });
    // })
    // .catch(alert);
})

});