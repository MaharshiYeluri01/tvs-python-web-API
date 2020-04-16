function save_image(){
    console.log("saving image")

    var uploaded_image = document.getElementById("uploaded_image");

    // Take action when the image has loaded
    uploaded_image.addEventListener("load", function () {
        var imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");

        // Make sure canvas is as big as the picture
        imgCanvas.width = uploaded_image.width;
        imgCanvas.height = uploaded_image.height;

        // Draw image into canvas element
        imgContext.drawImage(uploaded_image, 0, 0, uploaded_image.width, uploaded_image.height);

        // Get canvas contents as a data URL
        var imgAsDataURL = imgCanvas.toDataURL("image/png");

        // Save image into localStorage
        try {
            localStorage.setItem("uploaded_image", imgAsDataURL);
            console.log("Image is saved")
        }
        catch (e) {
            console.log("Storage failed: " + e);
        }
    }, false); }


function load_image(){
    console.log("Loading")
        var dataImage = localStorage.getItem('uploaded_image');
        bannerImg = document.getElementById('input_image');
        bannerImg.src = "data:image/png;base64," + dataImage;
     
}