import datetime
import os
from app import db
from sqlalchemy.sql import func


class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    
    def __repr__(self):
        return f"<User {self.email}>"
