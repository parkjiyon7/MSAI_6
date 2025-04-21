from flask import Blueprint
bp = Blueprint('auth', __name__, url_prefix = '/auth')


@bp.route('/login/')
def login():
    return f'안녕하세요. 환영합니다'

@bp.route('/signup/')
def signup():
    return f'회원 가입 페이지입니다'
