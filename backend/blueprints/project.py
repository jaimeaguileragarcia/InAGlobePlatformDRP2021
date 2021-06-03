from flask import Blueprint, request, jsonify, Response
from database_config.database import DB
from database_config.model import Project
import json

project = Blueprint('project', __name__)

@project.route('/projects', methods=['GET'])
def get_all_projects():
  #return jsonify(json_list = Project.query.all())
  entry = Project(name='name', status='status', description='desc')
  DB.add(entry)
  entry = Project.query.first()
  return jsonify(
        id=entry.id,
        name=entry.name,
        status=entry.status,
        description=entry.description
    )
 

@project.route('/projects/<project_id>', methods=['GET'])
def get_project(project_id):
  entry = Project.query.get(project_id)
  return jsonify(
        id=entry.id,
        name=entry.name,
        status=entry.status,
        description=entry.description
    )
  

@project.route('/projects', methods=['POST'])
def upload_project():
  name, desc, status = (request.json['name'], request.json['desc'], 
                        request.json['status'])
  entry = Project(name=name, status=status, description=desc)
  DB.add(entry)
 

@project.route('/projects/<project_id>', methods=['DELETE'])
def delete_project(project_id):
  entry = Project.query.get(project_id)
  DB.delete(entry)
