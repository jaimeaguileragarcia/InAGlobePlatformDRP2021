from operator import truediv
from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.task_model import Task

task = Blueprint('task', __name__)

@task.route('/projects/<project_id>/tasks', methods=['GET'])
def get_project_tasks(project_id):    
  entries = Task.query.filter_by(project_id=project_id)

  project_tasks = [{"description" : x.description, 
                    "due_date" : x.due_date, 
                    "priority" : x.priority,
                    "completed" : x.completed,
                    "project_id" : x.project_id,
                    "id" : x.id} for x in entries]
  return jsonify(project_tasks)     


  
@task.route('/projects/<project_id>/tasks', methods=['POST'])
@task.route('/projects/<project_id>', methods=['POST'])
def add_project_task(project_id):
  description, due_date, completed, priority = (request.json['description'], 
                        request.json['due_date'],
                        request.json['completed'], request.json['priority'])
  if completed == "Completed":
    is_completed = True
  else: 
    is_completed = False
  entry = Task(due_date=due_date, priority=priority, description=description, completed=is_completed, project_id=project_id)
  DB.add(entry)
  return ''              



