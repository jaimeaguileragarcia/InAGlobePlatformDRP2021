from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.user_model import User_project

user_project = Blueprint('user_project', __name__)

@user_project.route('/user_project', methods=['POST'])
def assign_project_to_user():
  username, project_id = (request.json['username'], request.json['project_id'])
  entry = User_project(username=username, project_id=project_id)
  DB.add(entry)
  return ''