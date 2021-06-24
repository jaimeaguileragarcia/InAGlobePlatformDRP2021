from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.project_model import Project
from backend.models.task_model import Task
from backend.models.user_model import User_project
from backend.models.task_model import AssignedTask

project = Blueprint('project', __name__)

@project.route('/projects', methods=['GET'])
def get_all_projects():
  project_query = Project.query.all()

  projects_list = [{"name" : x.name, 
                    "status" : x.status, 
                    "description" : x.description,
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
  name, description, status, tag, location, files = (request.json['name'], request.json['description'], 
                        request.json['status'], request.json['tag'],
                        request.json['location'], request.json['files'])
  entry = Project(name=name, status=status, description=description, tag=tag, location=location, files=files)
  DB.add(entry)
  return jsonify(id=entry.id) 

@project.route('/projects/<project_id>', methods=['POST'])
def update_project(project_id):
  entry = Project.query.get(project_id)
  name, description, status, tag, location, files = (request.json['name'], request.json['description'], request.json['status'],
    request.json['tag'], request.json['location'], request.json['files'])
  entry.name = name
  entry.description = description
  entry.status = status
  entry.tag = tag
  entry.location = location
  entry.files = files
  DB.add(entry)
  return ''
 

@project.route('/projects/<project_id>', methods=['DELETE'])
def delete_project(project_id):
  
  assignments = User_project.query.filter_by(project_id=project_id)
  for assignment in assignments:
    DB.delete(assignment)
  
  
  tasks = Task.query.filter_by(project_id=project_id)
  for task in tasks:
    assigned_tasks = AssignedTask.query.filter_by(task_id=task.id)
    for assignment in assigned_tasks:
      DB.delete(assignment)
    DB.delete(task)

  entry = Project.query.get(project_id)
  DB.delete(entry)
  return ''
