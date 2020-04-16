from flask import Flask
from flask import render_template,request, redirect,render_template_string
from PIL import Image
import base64
from io import BytesIO
import pdb
from time import sleep


app = Flask(__name__)

app.debug = True



@app.route("/")
def index():
    return render_template("index.html",show_result=False)

@app.route("/upload-image", methods=["POST"])
def upload_image():

    if request.method == "POST":
        selected_model_name=request.form["model_name"]
        print(selected_model_name)
        if request.files:
            image = request.files["image"]
            pil_image=Image.open(image.stream)
            buffered = BytesIO()
            pil_image.save(buffered, format="JPEG")
            img_str = base64.b64encode(buffered.getvalue())

            # return redirect(request.url)
            image_url="../static/img/puppies-cover.jpg"
            sleep(5)
        return render_template("index.html",show_result=True,input_image=image_url,output_image=image_url,model_name=selected_model_name)
    return 'ok'





if __name__ == "__main__":
    app.run(debug=True)