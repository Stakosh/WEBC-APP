import os
import bcrypt
from config import create_app
from flask.cli import FlaskGroup
from models import UniversityCredential
from flask import Flask, jsonify, request
from db import db

app = create_app()
cli = FlaskGroup(create_app=create_app)
db.init_app(app)


@app.route('/new', methods=['POST'])
def register():
    """Endpoint to register a new university credential."""
    data = request.get_json()
    hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
    result = add_credential(
        student_id=data.get('student_id'),
        first_name=data.get('first_name'),
        last_name=data.get('last_name'),
        email=data.get('email'),
        password=hashed_password.decode('utf-8')  # Store the hashed password as a string
    )
    return jsonify(result), 201 if result['status'] == 'ok' else 400

@app.route('/login', methods=['POST'])  # Changed to POST for security reasons
def login():
    """Endpoint to retrieve credentials by email and password."""
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    credential = UniversityCredential.query.filter_by(email=email).first()
    if credential and bcrypt.checkpw(password.encode('utf-8'), credential.password.encode('utf-8')):
        return jsonify(credential.to_json())
    else:
        return jsonify({"error": "Invalid credentials"}), 404

def add_credential(student_id, first_name, last_name, email, password):
    """Add a new credential to the database."""
    if UniversityCredential.query.filter_by(email=email).first():
        return {"status": "error", "message": "Email already exists."}
    
    new_credential = UniversityCredential(
        student_id=student_id,
        first_name=first_name,
        last_name=last_name,
        email=email,
        password=password  # Assume password is already hashed
    )
    db.session.add(new_credential)
    db.session.commit()
    return {"status": "ok", "credential": new_credential.to_json()}



def is_database_empty():
    return UniversityCredential.query.first() is None

def initialize_default_user():
    if is_database_empty():
        hashed_password = bcrypt.hashpw('queso'.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        add_credential(
            student_id='20723182-7',
            first_name='Javiera',
            last_name='Soto',
            email='queso@queso.cl',
            password=hashed_password
        )
        print("Default user created.")
    else:
        print("Database is not empty. No default user created.")

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Ensure all tables are created
        initialize_default_user()  # Check if the DB is empty and possibly add default user
    cli()