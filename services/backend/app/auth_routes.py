from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app import app, db
from models import User

@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email is None or password is None:
        return jsonify({'error': 'Email and password required'}), 400
    
    # Verificar si el email ya existe
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already in use'}), 400
    
    # Generar hash de la contraseña
    password_hash = generate_password_hash(password)
    
    # Crear y guardar el usuario
    new_user = User(email=email, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if email is None or password is None:
        return jsonify({'error': 'Email and password required'}), 400
    
    # Buscar al usuario por email
    user = User.query.filter_by(email=email).first()
    
    if user is None or not check_password_hash(user.password_hash, password):
        return jsonify({'error': 'Invalid email or password'}), 401
    
    # Iniciar sesión y generar token (puedes usar una biblioteca como Flask-JWT o similar)
    # Aquí puedes implementar la generación de token para autenticación futura.
    
    return jsonify({'message': 'Login successful'}), 200
