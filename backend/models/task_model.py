# These are models relating to an individual task (in a project)
from sqlalchemy.sql.expression import table
from backend.database_config.database import DB
from flask import jsonify
from sqlalchemy.sql.schema import ForeignKey
db = DB.the_database

class Task(db.Model):
    description = db.Column(db.String)
    priority = db.Column(db.Integer)
    completed = db.Column(db.Boolean)
    due_date = db.Column(db.Date)
    project_id = db.Column(db.Integer, ForeignKey('project.id'))
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  

    def save(self):
        db.add(self)
        return self

    def remove(self):
        db.delete(self)

    def update(self):
        db.update()
        return self

    def serialize(self):
        return jsonify(
            description = self.description,
            priority = self.priority,
            completed = self.completed,
            due_date = self.due_date,
            project_id = self.project_id,
            id = self.id
            )

class AssignedTasks(db.Model):
    task_id = db.Column(db.Integer)
    username = db.Column(db.String)
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)  

    def save(self):
        db.add(self)
        return self

    def remove(self):
        db.delete(self)

    def update(self):
        db.update()
        return self

    def serialize(self):
        return jsonify(
            task_id = self.task_id,
            username = self.username,
            id = self.id
            )

