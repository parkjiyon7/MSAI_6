from flask import Blueprint
bp = Blueprint('board', __name__, url_prefix = '/question')


@bp.route('/board/')
def board():
    return f'게시판입니다'

@bp.route('/board/<id>/')
def board_view(id):
    return f'{id}번째 게시판입니다'
