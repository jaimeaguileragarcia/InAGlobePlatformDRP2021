#!/bin/sh
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
pip install Flask python-dotenv
export ENV="dev"
gunicorn backend.wsgi
