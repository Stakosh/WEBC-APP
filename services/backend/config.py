import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_restx import Api


class BaseConfig:
    DEBUG = True
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    

class DevelopmentConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SECRET_KEY = os.environ.get("SECRET_KEY")


    # app/__init__.py
cors = CORS()
db = SQLAlchemy()


def create_app(script_info=None):

    #set flask app settings from environmental variables set in docker-compose
    app_settings = os.getenv("APP_SETTINGS")

    #instantiate app
    app = Flask(__name__)
    
    #set configs
    app.config.from_object(app_settings)

    #set extensions
    cors.init_app(
        app,
        resources= {r"*": {"origins": "http://localhost:3000", "allow_headers": "*", "expose_headers": "*"}},
        supports_credentials= True
    )
    db.init_app(app)

    #register api
    api = Api(version="1.0",title="APIs",doc="/docs/")
    api.init_app(app)

    @app.shell_context_processor
    def ctx():
        return {"app":app,"db":db}

    return app