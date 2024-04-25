from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from models import User

# Crea un Blueprint para la API
api_bp = Blueprint('api', __name__)

# Ruta para registrar un nuevo usuario
@api_bp.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Verifica que el email y la contraseña estén presentes
    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400
    
    # Verifica si el email ya está en uso
    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already in use'}), 400
    
    # Genera un hash de la contraseña
    password_hash = generate_password_hash(password)
    
    # Crea y guarda un nuevo usuario
    new_user = User(email=email, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

# Ruta para iniciar sesión
@api_bp.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Verifica que el email y la contraseña estén presentes
    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400
    
    # Busca al usuario por email
    user = User.query.filter_by(email=email).first()
    
    # Verifica la contraseña
    if user and check_password_hash(user.password_hash, password):
        # Iniciar sesión exitosamente (agrega tu lógica de autenticación/token)
        return jsonify({'message': 'Login successful'}), 200
    
    # Si el usuario no existe o la contraseña es incorrecta
    return jsonify({'error': 'Invalid email or password'}), 401

# Puedes agregar más rutas aquí si es necesario.
