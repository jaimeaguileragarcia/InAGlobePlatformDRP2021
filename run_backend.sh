#!/bin/sh
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
pip install Flask python-dotenv
export DATABASE_URL='postgres://g205001034_u:CierkbZMND@db.doc.ic.ac.uk:5432/g205001034_u'
cd backend
flask db upgrade
flask run
