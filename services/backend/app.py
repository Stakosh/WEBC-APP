from flask import Flask, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db:5432/app_dev'
app.config['SECRET_KEY'] = 'secret'  #la clave esta en el docker-compose

db = SQLAlchemy(app)
login_manager = LoginManager(app)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Define a route for user registration
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data['email']
    plain_password = data['password']
    
    # Hash the plain-text password
    hashed_password = generate_password_hash(plain_password)
    
    # Create a new user instance
    new_user = User(email=email, password_hash=hashed_password)
    
    # Save the user to the database
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'})

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = User.query.filter_by(username=username).first()
    if user and user.password == password:  # Use hashing in production
        login_user(user)
        return jsonify({'success': True, 'message': 'Logged in successfully'})
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'success': True, 'message': 'Logged out successfully'})

@app.route('/protected')
@login_required
def protected():
    return jsonify({'success': True, 'message': 'You are in a protected route'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
