from flask import request, render_template

from . import app, db 
from .models import User
from. auth import basic_auth, token_auth

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/users', methods = ['POST'])
def create_user():
    if not request.is_json:
        return {"error": 'Your content-type must be application/json'}, 400
    data=request.json

    
    required_fields = ['firstName', 'lastName', 'username','email', 'password']
    missing_fields = []
    for field in required_fields:
        if field not in data:
            missing_fields.append(field)
    if missing_fields:
        return {'error': f" {','.join(missing_fields)} must be in the request body"}, 400
    

    first_name = data.get('firstName')
    last_name= data.get('lastName')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    check_users=db.session.execute(db.select(User).where((User.username == username) | (User.email == email))).scalars().all()
    if check_users:
        return {'error': 'A user witht that username and/or email already exists'}, 400


    new_user = User(first_name=first_name, last_name=last_name, email=email, username=username, password=password)


    return new_user.to_dict(), 201

@app.route('/token')
@basic_auth.login_required
def get_token():
    user=basic_auth.current_user()
    return user.get_token()

@app.route('/users/me')
@token_auth.login_required
def get_me():
    user = token_auth.current_user()
    return user.to_dict()

