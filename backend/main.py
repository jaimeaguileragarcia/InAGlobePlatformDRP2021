from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def my_index():
    return render_template("index.html", token="DRP_token")

app.run(debug=True)