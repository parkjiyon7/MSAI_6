from flask import Blueprint, render_template, g, redirect, url_for
from app.models import Question

bp = Blueprint('mypage', __name__, url_prefix='/mypage')

@bp.route('/myquestions')
def my_questions():
    if not g.user:
        return redirect(url_for('auth.login'))
    my_questions = Question.query.filter_by(user=g.user).order_by(Question.create_date.desc()).all()
    return render_template('mypage/my_question_list.html', question_list=my_questions)
