from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def my_index():
    return render_template("index.html", token="DRP_token")

if __name__ == "__main__":
    app.run(debug=True)