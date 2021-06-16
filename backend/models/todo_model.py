from sqlalchemy.sql.expression import table
from sqlalchemy.sql.schema import ForeignKey
from backend.database_config.database import DB
from flask import jsonify

db = DB.the_database

class Todo(db.Model):
    priority = db.Column(db.String)
    todo_desc = db.Column(db.String)
    due_date = db.Column(db.Date)
    username = db.Column(db.String, ForeignKey('user.username'))
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
            priority = self.priority,
            todo_desc = self.todo_desc,
            username = self.username,
            due_date = self.due_date,
            id = self.id
            )