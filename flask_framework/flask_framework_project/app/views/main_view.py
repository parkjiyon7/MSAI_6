from flask import Blueprint, render_template, url_for, current_app
from flask import render_template
from app.models import Question
from werkzeug.utils import redirect

bp = Blueprint('main', __name__, url_prefix = '/')

# @bp.route('/')
# @bp.route('/home/')
# def guest():
#     return render_template('index.html', title='나의 홈페이지', username='guest')

# @bp.route('/<name>')
# @bp.route('/home/')
# def index(name):
#     return render_template('index.html', title='나의 홈페이지', username=name)

# @bp.route('/hello/<name>/<int:n>')
# def hello(name, n):
#     return render_template('hello.html', title = 'star', username=name, num = n)

@bp.route('/')
def index():
    # question_list = Question.query.order_by(Question.create_date.desc())
    current_app.logger.info('메인페이지 접근')
    #return render_template('question/question_list.html', question_list = question_list)
    return redirect(url_for('question.qlist'))
