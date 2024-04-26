from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

#Inicia Flask
app = Flask(__name__) 
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db:5432/app_dev'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'SECRET_KEY'  #la clave esta en el docker-compose

db= SQLAlchemy(app)





