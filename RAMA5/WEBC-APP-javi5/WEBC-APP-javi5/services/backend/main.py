import bcrypt
from flask import request, jsonify
from config import app, db
from models import UniversityCredential
import os
import time
#hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')



@app.route("/", methods=["POST"])
def login():
    # Get JSON data from the request
    data = request.get_json()

    # Check for missing email or password
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({"error": "Please provide both email and password"}), 400

    # Query the database for the user by email
    user = UniversityCredential.query.filter_by(email=email).first()

    # Check if user exists and the password is correct
    if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        # Success: the password matches
        return jsonify({"message": "Login successful"}), 200
    else:
        # Failure: user not found or password does not match
        return jsonify({"error": "Invalid email or password"}), 40


@app.route("/create_contact", methods=["POST"])
def register():
    # Extract data from the request
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Check for the presence of email and password in the request
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    # Check if user already exists
    if UniversityCredential.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 409

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Create a new user instance
    new_user = UniversityCredential(email=email, password=hashed_password.decode('utf-8'))
    db.session.add(new_user)
    db.session.commit()

    # Return success message
    return jsonify({"message": "User registered successfully"}), 201




@app.route("/update_contact/int:user_id", methods=["PATCH"])
def update_alumno(user_id):
    alumno = UniversityCredential.query.get(user_id)

    if not alumno:
        return jsonify({"message": "User not found"}), 400
    
    data = request.json
    alumno.student_id = data.get("studentId", alumno.student_id)
    alumno.first_name = data.get("firstName",alumno.first_name)
    alumno.last_name = data.get("lastName", alumno.last_name)
    alumno.email = data.get("email", alumno.email)
    alumno.password = data.get("password", alumno.password)

    db.session.commit()

    return jsonify({"message": "Usuario MODIFICADO exitosamente"}), 200


from flask import jsonify
from models import UniversityCredential
from config import db, app
import bcrypt

@app.route("/add_example", methods=["POST"])
def initialize_default_user():
    # Checks if any users exist
    if not UniversityCredential.query.first():
        # Creates a hashed password
        hashed_password = bcrypt.hashpw('queso'.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
        # Creates a default user object
        default_user = UniversityCredential(
            student_id='20.723.182-7',
            first_name='Javiera',
            last_name='Soto',
            email='queso@queso.cl',
            password=hashed_password
        )
        
        # Adds the default user to the database
        db.session.add(default_user)
        db.session.commit()
        
        # Returns a success message
        return jsonify({"message": "Default user created successfully"}), 201
        
    # Returns a message if a user already exists
    return jsonify({"message": "User already exists"}), 200


time.sleep(10)
with app.app_context():
        db.create_all()


if __name__ == "__main__":

    app.run(debug=True)
