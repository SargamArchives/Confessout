from __init__ import app
from helper import create_confession, get_confessions
from models import CodeManager

from flask import jsonify, request
from flask_cors import cross_origin


@app.post("/createuser")
@cross_origin()
def create_user():
    req = request.get_json(force=True)
    try:
        username = req["username"]
        password = req["password"]
    except KeyError:
        return {"message": "invalid request"}, 400
    CodeManager.create_user(username=username, password=password)
    return {"message": "success"}, 201


@app.post("/signin")
@cross_origin()
def chek_user():
    req = request.get_json(force=True)
    try:
        username = req["username"]
        password = req["password"]
    except KeyError:
        return {"message": "invalid request"}, 400
    message = CodeManager.check_user(username=username, password=password)
    return {"message": message}


@app.post("/confess")
@cross_origin()
def confess():
    req = request.get_json(force=True)
    try:
        profile = req["profile"]
        message = req["message"]
    except KeyError:
        return {"message": "invalid request"}, 400
    create_confession(username=profile, message=message)
    return {"message": "ok"}, 201


@app.get("/get")
@cross_origin()
def return_confessions():
    user = request.args.get("u")
    messages = get_confessions(user)
    print(messages)
    return jsonify(messages)


if __name__ == "__main__":
    app.run(debug=True)
