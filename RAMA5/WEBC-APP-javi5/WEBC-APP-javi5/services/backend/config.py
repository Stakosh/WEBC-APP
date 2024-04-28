import os
from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)

# Configure CORS with more specific options
CORS(app, resources={r"/api/*": {
    "origins": ["http://localhost:3000", "http://localhost:5000"],
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["*"],
    "expose_headers": ["*"],
    "supports_credentials": True,
    "max_age": 3600
}})



app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@db:5432/app_dev"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False 

db = SQLAlchemy(app)





