from models import Confessions
from __init__ import db

#
# class Confessions(db.Model):
# id = db.Column(db.Integer, primary_key=True)
# profile = db.Column(db.String(30))
# message = db.Column(db.Text)


def create_confession(username, message):
    confession = Confessions(profile=username, message=message)
    db.session.add(confession)
    db.session.commit()


def get_confessions(username):
    confessions = Confessions.query.filter_by(profile=username).all()
    confessions = [i.message for i in confessions]
    return confessions
