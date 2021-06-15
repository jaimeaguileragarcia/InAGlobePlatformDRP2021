from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.user_model import User_project
from backend.models.project_model import Project

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

@user_project.route('/user_project/username/<username>', methods=['GET'])
def get_projects_for_user(username):
  entries = User_project.query.filter_by(username=username)
  project_list = [{"id" : Project.query.get(x.project_id).id,
                    "name" : Project.query.get(x.project_id).name, 
                    "status" : Project.query.get(x.project_id).status,
                    "description" : Project.query.get(x.project_id).description,
                    "tag" : Project.query.get(x.project_id).tag,
                    "location" : Project.query.get(x.project_id).location,
                    "files" : Project.query.get(x.project_id).files} for x in entries]
  return jsonify(project_list)

@user_project.route('/user_project', methods=['POST'])
def assign_project_to_user():
  username, project_id = (request.json['username'], request.json['project_id'])
  entry = User_project(username=username, project_id=project_id)
  DB.add(entry)
  return ''