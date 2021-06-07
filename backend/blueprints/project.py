from re import T
from flask import Blueprint, request, jsonify, Response
from backend.database_config.database import DB
from backend.models.project_model import Project
import json

project = Blueprint('project', __name__)

@project.route('/projects', methods=['GET'])
def get_all_projects():
  project_query = Project.query.all()

  projects_list = [{"name" : x.name, 
                    "status" : x.status, 
                    "desc" : x.description,
                    "tag" : x.tag,
                    "location" : x.location,
                    "files" : x.files, 
                    "id" : x.id} for x in project_query]
  return jsonify(projects_list)
 

@project.route('/projects/<project_id>', methods=['GET'])
def get_project(project_id):
  entry = Project.query.get(project_id)
  return jsonify(
        id=entry.id,
        name=entry.name,
        status=entry.status,
        description=entry.description,
        tag=entry.tag,
        location=entry.location,
        files=entry.files
    )
  

@project.route('/projects', methods=['POST'])
def upload_project():
  name, desc, status, tag, location, files = (request.json['name'], request.json['desc'], 
                        request.json['status'], request.json['tag'],
                        request.json['location'], request.json['drive_link'])
  entry = Project(name=name, status=status, description=desc, tag=tag, location=location, files=files)
  DB.add(entry)
  return ''
 

@project.route('/projects/<project_id>', methods=['DELETE'])
def delete_project(project_id):
  entry = Project.query.get(project_id)
  DB.delete(entry)
  return ''
