from sqlalchemy.sql.expression import table
from backend.database_config.database import DB
from flask import jsonify

db = DB.the_database

# These are models related to an InAGlobe project
class Project(db.Model):
    name = db.Column(db.String)
    status = db.Column(db.String)
    description = db.Column(db.String)
    tag = db.Column(db.String)
    location = db.Column(db.String)
    files = db.Column(db.String)
    # list of ngos and academics and users need to be separate tables
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
            id=self.id,
            name=self.name,
            status=self.status,
            description=self.description,
            tag = self.tag,
            location = self.location,
            files = self.files
            )

class ProjectTasks(db.Model):
    project_id = db.Column(db.Integer)
    task_id = db.Column(db.Integer, primary_key=True, autoincrement=True)  

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
            project_id = self.project,
            task_id = self.task_id
            )

# class User_todo(db.Model):
#     username = db.Column(db.String, db.ForeignKey("user.username"), nullable=False)
#     todo_id = db.Column(db.Integer, db.ForeignKey("todo.id"), nullable=False)
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)  

#     def save(self):
#         db.add(self)
#         return self

#     def remove(self):
#         db.delete(self)

#     def update(self):
#         db.update()
#         return self

#     def serialize(self):
#         return jsonify(
#             username = self.username,
#             todo_id = self.todo_id,
#             id = self.id
#             )