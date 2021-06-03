from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

db = SQLAlchemy(app)
db.app = app
db.init_app(app)
migrate = Migrate(app, db)

@app.route("/")
def my_index():
    return render_template("index.html", token="DRP_token")


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)