import os
from flask import Flask, render_template
from flask_migrate import Migrate
from flask_mail import Mail, Message
from backend.database_config.database import DB
from backend.blueprints.project import project
from backend.blueprints.user import user
from backend.blueprints.todo import todo
from backend.blueprints.task import task
from backend.blueprints.project_to_user import user_project
from backend.blueprints.assigned_task import assigned_task

ENV = os.environ.get("ENV")

app = Flask(__name__)

app.register_blueprint(project)
app.register_blueprint(user)
app.register_blueprint(todo)
app.register_blueprint(task)
app.register_blueprint(user_project)
app.register_blueprint(assigned_task)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

if ENV == 'dev':
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://g205001034_u:CierkbZMND@db.doc.ic.ac.uk:5432/g205001034_u'
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ozufqkgtnoptrc:42b722a2bf88caa314bc0558abb0098d0971a9d588728a64413576cd62255003@ec2-54-224-120-186.compute-1.amazonaws.com:5432/dfbpe6718mqdmh'

# Mail settings for "forgot password" mail sending
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'inaglobe.authentication@gmail.com',
    "MAIL_PASSWORD": '5Q4g>kQ&c'
}

app.config.update(mail_settings)
mail = Mail(app)

db = DB.the_database

db.app = app
db.init_app(app)

migrate = Migrate(app, db)

@app.route("/")
def my_index():
    return render_template("index.html", token="DRP_token")


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)