# These are models related to a user
from sqlalchemy.sql.expression import table
from backend.database_config.database import DB
from flask import jsonify

db = DB.the_database

class User(db.Model):
    firstname = db.Column(db.String)
    surname = db.Column(db.String)
    password = db.Column(db.String)
    title = db.Column(db.String)
    email = db.Column(db.String)
    bio = db.Column(db.String)
    joined = db.Column(db.String)
    location = db.Column(db.String)
    availability = db.Column(db.String)
    partnership_opportunities = db.Column(db.String)
    interests = db.Column(db.String)
    username = db.Column(db.String, primary_key=True, autoincrement=True)  

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
            firstname = self.firstname,
            surname = self.surname,
            password = self.password,
            title = self.title,
            email = self.email,
            bio = self.bio,
            joined = self.joined,
            location = self.location,
            availability = self.availability,
            partnership_opportunities = self.partnership_opportunities,
            interests = self.interests
            )

class User_project(db.Model):
    username = db.Column(db.String, db.ForeignKey("user.username"), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("project.id"), nullable=False)
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
            surname = self.surname,
            project_id = self.project_id,
            id = self.id
            )