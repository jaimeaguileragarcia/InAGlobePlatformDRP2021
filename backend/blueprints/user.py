from flask import Blueprint, request, jsonify, Response
from backend.database_config.database import DB
from backend.models.user_model import User
import bcrypt 

user = Blueprint('user', __name__)

@user.route('/users', methods=['GET'])
def get_all_users():
  user_query = User.query.all()

  users_list = [{"firstname" : x.firstname, "surname" : x.surname, 
  "title" : x.title, "email" : x.email, "bio" : x.bio, "joined" : x.joined, 
  "location" : x.location, "availability" : x.availability, 
  "partnership_opportunities" : x.partnership_opportunities,
  "interests" : x.interests, "username" : x.username } for x in user_query]
  return jsonify(users_list)


@user.route('/users/<username>', methods=['GET'])
def get_id(username):
  user = User.query.get(username)
  return jsonify(
      username = user.username,
      firstname = user.firstname,
      surname = user.surname,
      password = user.password,
      title = user.title, 
      email = user.email,
      bio = user.bio, 
      joined = user.joined, 
      location = user.location,
      availability = user.availability,
      partnership_opportunities = user.partnership_opportunities,
      interests = user.interests
      )
  

@user.route('/users', methods=['POST'])
def add_user():
  username, firstname, surname, password, title, email, bio, joined, location, availability, partnership_opportunities, interests = (
   request.json['username'], request.json['firstname'], 
   request.json['surname'],
   request.json['password'],
   request.json['title'], 
   request.json['email'], request.json['bio'], request.json['joined'], 
   request.json['location'],request.json['availability'], 
   request.json['partnership_opportunities'], request.json['interests'])
 
  salt = bcrypt.gensalt()
  hash_pswd = bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')
  entry = User(username = username, firstname = firstname, surname = surname, password = hash_pswd,
              title = title, email = email, bio = bio, joined = joined, location = location, 
              availability = availability, partnership_opportunities = partnership_opportunities, 
              interests = interests)
  DB.add(entry)
  return ''


@user.route('/users/<username>', methods=['POST'])
def update_user(username):
  entry = User.query.get(username)
  firstname, surname, password, title, email, bio, joined, location, availability, partnership_opportunities, interests = (
   request.json['firstname'], 
   request.json['surname'],
   request.json['password'],
   request.json['title'], 
   request.json['email'], request.json['bio'], request.json['joined'], 
   request.json['location'],request.json['availability'], 
   request.json['partnership_opportunities'], request.json['interests'])
  entry.firstname = firstname
  entry.surname = surname
  

  salt = bcrypt.gensalt()
  hash_pswd = bcrypt.hashpw(password.encode('utf-8'), salt)
  entry.password = hash_pswd

  entry.title = title
  entry.email = email
  entry.bio = bio
  entry.joined = joined
  entry.location = location
  entry.availability = availability
  entry.partnership_opportunities = partnership_opportunities
  entry.interests = interests
  DB.add(entry)
  return ''
 

@user.route('/users/<username>', methods=['DELETE'])
def delete_user(username):
  entry = User.query.get(username)
  DB.delete(entry)
  return ''


@user.route('/users/login', methods = ['POST'])
def user_login():
  username, password = (request.json['username'], request.json['password'])
  user = User.query.get(username)
  if user == None:
    return jsonify(token = "")
    
  if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
    return jsonify(token = username)
  else:
    return jsonify(token = "")