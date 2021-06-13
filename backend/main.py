import os
from flask import Flask, render_template
from flask_migrate import Migrate
from backend.database_config.database import DB
from backend.blueprints.project import project
from backend.blueprints.user import user
from backend.blueprints.todo import todo
from backend.blueprints.task import task

ENV = os.environ.get("ENV", "dev")

app = Flask(__name__)

app.register_blueprint(project)
app.register_blueprint(user)
app.register_blueprint(todo)
app.register_blueprint(task)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

if ENV == 'dev':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://g205001034_u:CierkbZMND@db.doc.ic.ac.uk:5432/g205001034_u'
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://icbwsbzlctcxyx:a0d7f73e5b743a35f33d95640b517b6e7e9e5b59cd2ff10673e90372b4b34d44@ec2-34-193-112-164.compute-1.amazonaws.com:5432/deje5qriuvrh39'


db = DB.the_database

db.app = app
db.init_app(app)

migrate = Migrate(app, db)

@app.route("/")
def my_index():
    return render_template("index.html", token="DRP_token")


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)