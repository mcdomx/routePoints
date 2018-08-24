import os
from flask import Flask, session, jsonify, render_template, request
from flask_session import Session
from flask_socketio import SocketIO, emit

app = Flask(__name__)

# Check for environment variables
if not os.getenv("FLASK_APP"):
    raise RuntimeError("-- Environment variable FLASK_APP is not set")

# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"

@app.route("/<string:routePoints>")
def index():
        return render_template("index.html")
