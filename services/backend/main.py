from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000", "supports_credentials": True}})

# SQLAlchemy configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db:5432/app_dev'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'SECRET_KEY'  # Change this to your actual secret key

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Import models here
from models import UniversityCredential

# Routes
@app.route('/new', methods=['POST', 'OPTIONS'])  # Include OPTIONS method
def handle_new():
    if request.method == 'OPTIONS':  # Handle OPTIONS request
        return '', 200

    # Handle actual POST request logic here
    # This is where you create a new credential
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

# Run the application
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)
