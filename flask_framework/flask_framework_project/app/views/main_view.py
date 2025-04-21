from flask import Blueprint
from flask import render_template

bp = Blueprint('main', __name__, url_prefix = '/')

@bp.route('/')
@bp.route('/home/')
def guest():
    return render_template('index.html', title='나의 홈페이지', username='guest')

@bp.route('/<name>')
@bp.route('/home/')
def index(name):
    return render_template('index.html', title='나의 홈페이지', username=name)

@bp.route('/hello/<name>/<int:n>')
def hello(name, n):
    return render_template('hello.html', title = 'star', username=name, num = n)