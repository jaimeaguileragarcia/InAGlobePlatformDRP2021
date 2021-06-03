import flask

app = flask.Flask("__main__")

@app_rounte("/")
def my_index():
    return flask.render_template("index.html", token="DRP_token")

    app_run(debug=True)