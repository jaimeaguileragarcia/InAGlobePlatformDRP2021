from operator import truediv
from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.task_model import AssignedTask, Task

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
  return jsonify(id=entry.id)              


@task.route('/projects/<project_id>/tasks/<task_id>', methods=['POST'])
def update_task(project_id, task_id):
  entry = Task.query.get(task_id)
  # description, priority, due_date, completed, project_id = (request.json['description'], request.json['priority'],
  # request.json['due_date'], request.json['completed'], request.json['project_id'])
  # entry.description = description
  # entry.priority = priority
  # entry.due_date = due_date
  entry.completed = True

  # entry.project_id = project_id
  DB.add(entry)
  return ''

@task.route('/projects/<project_id>/tasks/<task_id>', methods=['DELETE'])
def delete_task(project_id, task_id):
  entries = AssignedTask.query.filter_by(task_id=task_id)
  for e in entries:
    DB.delete(e)

  entry = Task.query.get(task_id)
  DB.delete(entry)
  return ''