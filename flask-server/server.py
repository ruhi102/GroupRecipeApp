import datetime
from flask import Flask, jsonify, request, session, flash, redirect, url_for, render_template


from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db, User, Recipe


app = Flask(__name__)

app.config['SECRET_KEY'] = 'recipe-app'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:456@localhost/signup'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
    db.create_all()

""" from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:456@localhost/signup'
db = SQLAlchemy(app)


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(120), unique=True)
    created_at = db.Column(db.DateTime)

    def __repr__(self):
        return f"Event: {self.description}"

    def __init__(self, description):
        self.description = description

 
x = datetime.datetime.now()"""


@app.route("/")
def hello_world():
    return "<p> Hello, World </p>"


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }


@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]
    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email

    })


@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id
    return jsonify({
        "id": user.id,
        "email": user.email
    })


@app.route("/user", methods=["GET"])
def get_user():
    users = User.query.all()
    user_list = []
    for user in users:
        user_data = {
            'id': user.id,
            'email': user.email,
            'password': user.password
        }
        user_list.append(user_data)
    return jsonify(user_list)


@app.route("/recipe", methods=["POST"])
def create_recipe():
    title = request.json["title"]
    summary = request.json["summary"]
    instructions = request.json["instructions"]
    ingredients = request.json["ingredients"]
    image_url = request.json["image_url"]

    recipe = Recipe(title, summary, instructions, ingredients, image_url)
    db.session.add(recipe)
    db.session.commit()

    # Perform any necessary processing with the received data
    # ...

    return jsonify({
        "message": "Recipe successfully received and processed",
        "title": title,
        "summary": summary,
        "instructions": instructions,
        "ingredients": ingredients,
        "image_url": image_url
    })


@app.route("/recipes", methods=["GET"])
def get_recipes():
    recipes = Recipe.query.all()
    recipe_list = []
    for recipe in recipes:
        recipe_data = {
            "id": recipe.id,
            "title": recipe.title,
            "summary": recipe.summary,
            "instructions": recipe.instructions,
            "ingredients": recipe.ingredients,
            "image_url": recipe.image_url
        }
        recipe_list.append(recipe_data)
    return jsonify(recipe_list)


@app.route("/recipes/<id>", methods=["GET"])
def get_recipe(id):
    recipe = Recipe.query.filter_by(id=id).one()
    recipe_data = {
        "id": recipe.id,
        "title": recipe.title,
        "summary": recipe.summary,
        "instructions": recipe.instructions,
        "ingredients": recipe.ingredients,
        "image_url": recipe.image_url
    }
    return jsonify(recipe_data)


# Running app
if __name__ == '__main__':
    app.run(debug=True)
