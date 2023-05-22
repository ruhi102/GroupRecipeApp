from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()


def get_uuid():
    return uuid4().hex


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(255), primary_key=True,
                   unique=True, default=get_uuid)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)


class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    summary = db.Column(db.Text)
    instructions = db.Column(db.Text)
    ingredients = db.Column(db.Text)
    image_url = db.Column(db.String(255))

    def __init__(self, title, summary, instructions, ingredients, image_url):
        self.title = title
        self.summary = summary
        self.instructions = instructions
        self.ingredients = ingredients
        self.image_url = image_url

    """ def format_recipe(recipe):
        return{
            "title": recipe.title,
            "id": recipe.id,
            "summary": recipe.summary,
            "instructions": recipe.instructions,
            "ingredients": recipe.ingredients,
            "image_url": recipe.image_url
        } """
