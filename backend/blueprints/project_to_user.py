from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.user_model import User_project

user_project = Blueprint('user_project', __name__)

@user_project.route('/user_project', methods=['GET'])
def get_all_assignments():
  project_query = User_project.query.all()

  projects_list = [{"username" : x.username,
                    "project_id" : x.project_id, 
                    "id" : x.id} for x in project_query]
  return jsonify(projects_list)
 

@user_project.route('/user_project/<assignment_id>', methods=['GET'])
def get_project(assignment_id):
  entry = User_project.query.get(assignment_id)
  return jsonify(
        username=entry.username,
        project_id=entry.project_id,
        id=entry.id
    )

@user_project.route('/user_project', methods=['POST'])
def assign_project_to_user():
  username, project_id = (request.json['username'], request.json['project_id'])
  entry = User_project(username=username, project_id=project_id)
  DB.add(entry)
  return ''