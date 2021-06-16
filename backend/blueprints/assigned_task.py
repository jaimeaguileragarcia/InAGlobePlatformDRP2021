from operator import truediv
from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.task_model import AssignedTasks

assigned_task = Blueprint('assigned_task', __name__)

@assigned_task.route('/assigned_task', methods=['GET'])
def get_all_assignments():
  assignments = AssignedTasks.query.all()

  assignments_list = [{"username" : x.username,
                    "task_id" : x.task_id, 
                    "id" : x.id} for x in assignments]
  return jsonify(assignments_list)

@assigned_task.route('/assigned_task', methods=['POST'])
def assign_task_to_user():
  username, task_id = (request.json['username'], request.json['task_id'])
  entry = AssignedTasks(username=username, task_id=task_id)
  DB.add(entry)
  return ''