import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# Importar el Blueprint desde api.py
from api import api_bp

cors = CORS()
db = SQLAlchemy()

def create_app(script_info=None):

    # Configura las configuraciones de la aplicación desde variables de entorno
    app_settings = os.getenv("APP_SETTINGS")

    # Instancia la aplicación Flask
    app = Flask(__name__)
    
    # Establece las configuraciones de la aplicación
    app.config.from_object(app_settings)

    # Inicializa la base de datos con la aplicación
    db.init_app(app)
    
    # Habilita CORS en la aplicación
    cors.init_app(app)

    # Registra el Blueprint de la API
    app.register_blueprint(api_bp)

    # Define un contexto para acceder a la aplicación y la base de datos
    def ctx():
        return {"app": app, "db": db}

    return app
