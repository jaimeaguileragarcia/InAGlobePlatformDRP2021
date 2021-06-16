from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.user_model import User_project
from backend.models.project_model import Project
from backend.models.user_model import User

user_project = Blueprint('user_project', __name__)

@user_project.route('/user_project', methods=['GET'])
def get_all_assignments():
  assignments = User_project.query.all()

  assignments_list = [{"username" : x.username,
                    "project_id" : x.project_id, 
                    "id" : x.id} for x in assignments]
  return jsonify(assignments_list)
 

@user_project.route('/user_project/project/<project_id>', methods=['GET'])
def get_users_for_project(project_id):
  entries = User_project.query.filter_by(project_id=project_id)
  assignments_list = [{"username" : x.username,
                    "project_id" : x.project_id, 
                    "id" : x.id} for x in entries]
  return jsonify(assignments_list)

@user_project.route('/user_project/project_task/<project_id>', methods=['GET'])
def get_users_for_project_for_tasks(project_id):
  entries = User_project.query.filter_by(project_id=project_id)
  assigned_users = [{"value" : query.username,
                     "label" : query.firstname + " " + query.surname}
                     for query in (User.query.get(x.username) for x in entries)]
  return jsonify(assigned_users)

@user_project.route('/user_project/username/<username>', methods=['GET'])
def get_projects_for_user(username):
  entries = User_project.query.filter_by(username=username)
  project_list = [{"id" : query.id,
                    "name" : query.name, 
                    "status" : query.status,
                    "description" : query.description,
                    "tag" : query.tag,
                    "location" : query.location,
                    "files" : query.files} for query in (Project.query.get(x.project_id) for x in entries)]
  return jsonify(project_list)

@user_project.route('/user_project', methods=['POST'])
def assign_project_to_user():
  username, project_id = (request.json['username'], request.json['project_id'])
  entry = User_project(username=username, project_id=project_id)
  DB.add(entry)
  return ''