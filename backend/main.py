from flask import request, jsonify
from config import app, db
from models import User

@app.route('/login',methods=["Get","Post"])
def login():
    try:
        username = request.json.get("firstName")
        password = request.json.get("password")
        email = request.json.get("email")

        New_User = User(username=username, password=password, email=email)

        db.session.add(New_User)
        db.session.commit()
        return jsonify({'message':'Sign Up Successful'})
    except:
        entered_mail = request.json.get('email')
        entered_password = request.json.get('password')
        user = User.query.get(entered_mail) # type: ignore
        if not user:
            return jsonify({'message':'User not found'})
        else:
            if entered_password == user.password:
                return jsonify({'message':'Login Successful'})
            else:
                return jsonify({'message':'Wrong Password!!'})
        
if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)