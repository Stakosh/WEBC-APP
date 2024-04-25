# app/__init__.py

import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

cors = CORS()
db = SQLAlchemy()

def create_app(script_info=None):

    #set flask app settings from environmental variables set in docker-compose
    app_settings = os.getenv("APP_SETTINGS")

    #instantiate app
    app = Flask(__name__)
    
    #set configs
    app.config.from_object(app_settings)

    db.init_app(app)

    #register api

    def ctx():
        return {"app":app,"db":db}

    return app