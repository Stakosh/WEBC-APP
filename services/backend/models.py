# models.py
from main import db  # Import db instance from the config module

class UniversityCredential(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.String(100))
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    faculty = db.Column(db.String(100))
    department = db.Column(db.String(100))
    year = db.Column(db.Integer)

    def to_json(self):
        return {
            "id": self.id,
            "student_id": self.student_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "faculty": self.faculty,
            "department": self.department,
            "year": self.year
        }
