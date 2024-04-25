from app import db
from models import User  # Importa el modelo User desde tu archivo de modelos
from werkzeug.security import generate_password_hash, check_password_hash

# Create (Crear) - Registrar un nuevo usuario
def register_user(email, password):
    # Verifica si el usuario ya existe en la base de datos
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return None, "Email already in use"

    # Genera un hash de la contraseña
    password_hash = generate_password_hash(password)

    # Crea un nuevo usuario
    new_user = User(email=email, password_hash=password_hash)
    
    # Agrega el nuevo usuario a la base de datos
    db.session.add(new_user)
    db.session.commit()
    
    # Retorna el nuevo usuario
    return new_user, None

# Read (Leer) - Obtener un usuario por su ID
def get_user_by_id(user_id):
    return User.query.get(user_id)

# Read (Leer) - Obtener un usuario por su email
def get_user_by_email(email):
    return User.query.filter_by(email=email).first()

# Update (Actualizar) - Actualizar la contraseña de un usuario
def update_password(user_id, new_password):
    # Obtener al usuario por su ID
    user = get_user_by_id(user_id)
    if user:
        # Genera un nuevo hash para la contraseña
        new_password_hash = generate_password_hash(new_password)
        user.password_hash = new_password_hash
        
        # Guarda los cambios en la base de datos
        db.session.commit()
        return True
    else:
        return False

# Delete (Eliminar) - Eliminar un usuario por su ID
def delete_user(user_id):
    # Obtener al usuario por su ID
    user = get_user_by_id(user_id)
    if user:
        # Eliminar el usuario de la base de datos
        db.session.delete(user)
        db.session.commit()
        return True
    else:
        return False

# Función de inicio de sesión de usuario
def login_user(email, password):
    # Obtener al usuario por su email
    user = get_user_by_email(email)
    if user and check_password_hash(user.password_hash, password):
        # El usuario ha iniciado sesión correctamente (implementa tu lógica de autenticación aquí)
        return user, None
    else:
        return None, "Invalid email or password"
