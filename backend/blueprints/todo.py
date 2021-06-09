from re import T
from flask import Blueprint, request, jsonify
from backend.database_config.database import DB
from backend.models.todo_model import Todo

todo = Blueprint('todo', __name__)

@todo.route('/todos', methods=['GET'])
def get_all_todos():
  todos_query = Todo.query.all()

  todos_list = [{"id" : x.id, 
                 "todo_desc" : x.todo_desc,
                 "priority" : x.priority,
                 "username" : x.username} for x in todos_query]
  return jsonify(todos_list)
  

@todo.route('/todos', methods=['POST'])
def add_todo():
  todo_desc, priority, username = (request.json['todo_desc'], request.json['priority'], 
                        request.json['username'])
  entry = Todo(todo_desc=todo_desc, priority=priority, username=username)
  DB.add(entry)
  return ''

@todo.route('/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
  entry = Todo.query.get(todo_id)
  DB.delete(entry)
  return ''