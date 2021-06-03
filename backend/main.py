from flask import Flask, render_template, request

app = Flask(__name__)

@app_route("/")
def my_index():
    return flask.render_template("index.html", token="DRP_token")

app_run(debug=True)