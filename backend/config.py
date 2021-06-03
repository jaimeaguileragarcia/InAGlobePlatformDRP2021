import os
from backend.main import app
SQLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]  
SQLALCHEMY_TRACK_MODIFICATIONS = False

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

if 'DATABASE_URL' in os.environ:
  app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']