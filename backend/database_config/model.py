from database_config.database import DB
from flask import jsonify

db = DB.the_database


class Project(db.Model):
    name = db.Column(db.String(20))
    status = db.Column(db.String(10))
    description = db.Column(db.String)
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
            description=self.description
            )

