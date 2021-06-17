from operator import truediv
from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.task_model import AssignedTask
from backend.models.task_model import Task
from backend.models.project_model import Project

assigned_task = Blueprint('assigned_task', __name__)


@assigned_task.route('/assigned_task', methods=['GET'])
def get_all_assignments():
    assignments = AssignedTask.query.all()

    assignments_list = [{"username": x.username,
                         "task_id": x.task_id,
                         "id": x.id} for x in assignments]
    return jsonify(assignments_list)


@assigned_task.route('/assigned_task/username/<username>', methods=['GET'])
def get_tasks_for_user(username):
    entries = AssignedTask.query.filter_by(username=username)
    task_list = [{"description": task.description,
                  "project_id": task.project_id,
                  "project_name": Project.query.get(task.project_id).name,
                  "priority": task.priority,
                 "due_date": task.due_date} for task in (Task.query.get(x.task_id) for x in entries)]
    return jsonify(task_list)


@assigned_task.route('/assigned_task', methods=['POST'])
def assign_task_to_user():
    username, task_id = (request.json['username'], request.json['task_id'])
    entry = AssignedTask(username=username, task_id=task_id)
    DB.add(entry)
    return ''
