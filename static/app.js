function readURL(input) {
    console.log("called")
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#uploaded_image')
                .attr('src', e.target.result)
                .width(400)
                .height(400);
        };

        reader.readAsDataURL(input.files[0]);
    }

    var x = document.getElementById("result");
    var z = document.getElementById("input");
    var y = document.getElementById("uploaded_image");
    var legend = document.getElementById("legend");
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        legend.style.display = "none";

    document.getElementById("submit_button").disabled = false;
    
}




function on_toggler(){
    console.log("Loader enabled")

    var loader = document.getElementById("loader");
    loader.style.display = "block"; 
}


$(document).ready(function() {
    $('input:radio[name=model_name]').change(function() {
        console.log("Function called")
        radio_value=this.value

        var reader = new FileReader();
        document.getElementById("current_input").src 

    });
});