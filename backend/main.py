from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from database_config.database import DB
from blueprints.project import project
import os

app = Flask(__name__)

app.register_blueprint(project)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

if 'DATABASE_URL' in os.environ:
  app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL'].replace("postgres://", "postgresql://", 1)


db = DB.the_database

db.app = app
db.init_app(app)


migrate = Migrate(app, db)
  

@app.route("/")
def my_index():
    return render_template("index.html", token="DRP_token")


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)