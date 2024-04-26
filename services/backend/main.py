from flask import request,jsonify
from config import app, db 
from models import Contact

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})




#create 
if __name__ == "__main__":
    with app.app_context():
        db.create_all

    app.run(debug=True)





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
