from __init__ import db

from typing import List


class CodeManager:
    """
    Class for helping with managing code and database stuff
    """

    @classmethod
    def create_user(cls, username: str, password: str) -> None:
        """Method that creates new user"""
        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()

    @classmethod
    def return_all_user(cls) -> List[str]:
        """Method that returns all the users present in the database"""
        return User.query.all()

    @classmethod
    def check_user(cls, username, password) -> str:
        """Method that checks if the credintials provided by the user are true"""
        user = User.query.filter_by(username=username).first()
        if user is None:
            return "No user with this username"
        if password != user.password:
            return "The password you entered is invalid"
        return "success"


class User(db.Model):
    username = db.Column(db.String(30), primary_key=True)
    password = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"{self.username}"


class Confessions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    profile = db.Column(db.String(30))
    message = db.Column(db.Text)
