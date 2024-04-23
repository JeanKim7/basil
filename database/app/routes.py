from . import app, db 
from flask import request, render_template

@app.route("/")
def index():
    return render_template('index.html')