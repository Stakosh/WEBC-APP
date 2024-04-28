import bcrypt
from flask import request, jsonify
from config import app, db
from models import UniversityCredential
import os
import time
#hashed_password = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')





@app.route("/", methods=["GET"])
def login():
    alumnos = UniversityCredential.query.all()
    json_alumnos = list(map(lambda x: x.to_json(), alumnos))
    return jsonify({"alumnos": json_alumnos}), 200




@app.route("/create_contact", methods=["POST"])
def create_UniversityCredential():
    
    student_id = request.json.get("studentId")
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")
    password = request.json.get("password")

    if not first_name or student_id or not first_name or not last_name or not email or not password:
        return ( jsonify({"message": "Rellenar todos los campos porfavor"}),
                400,
            )
    new_alumno = UniversityCredential(student_id= student_id,first_name=first_name, last_name=last_name, email=email,password=password)
    try:
        db.session.add(new_alumno)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message":"User Created, Celebracion!!"}), 201




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



def initialize_default_user():
    if not UniversityCredential.query.first():  # Checks if any users exist
        hashed_password = bcrypt.hashpw('queso'.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        default_user = UniversityCredential(
            student_id='20.723.182-7',
            first_name='Javiera',
            last_name='Soto',
            email='queso@queso.cl',
            password=hashed_password
        )
        db.session.add(default_user)
        db.session.commit()
        print("Default user created.")


time.sleep(30)
with app.app_context():
        db.create_all()


if __name__ == "__main__":

    app.run(debug=True)
    initialize_default_user()
