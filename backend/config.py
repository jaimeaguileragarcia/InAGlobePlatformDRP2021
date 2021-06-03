import os

class Config():
    QLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]  
    SQLALCHEMY_TRACK_MODIFICATIONS = False