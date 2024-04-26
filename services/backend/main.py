# main.py
from flask import Flask, jsonify, request
from config import app, db
from models import UniversityCredential

@app.route('/credentials', methods=['GET'])
def get_credentials():
    credentials = UniversityCredential.query.all()
    return jsonify([cred.to_json() for cred in credentials])

@app.route('/create_credential', methods=['POST'])
def create_credential():
    data = request.get_json()
    new_credential = UniversityCredential(
        student_id=data["studentID"],
        first_name=data["firstName"],
        last_name=data["lastName"],
        email=data["email"],
        faculty=data["faculty"],
        department=data["department"],
        year=data["year"]
    )
    db.session.add(new_credential)
    db.session.commit()
    return jsonify({"message": "Credential created successfully"}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)
