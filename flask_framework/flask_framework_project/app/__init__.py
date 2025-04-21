from flask import Flask
app = Flask(__name__)

from .views import main_view, auth_view, board_view
app.register_blueprint(main_view.bp)
app.register_blueprint(auth_view.bp)
app.register_blueprint(board_view.bp)


# from .views import auth_view
# app.register_blueprint(auth_view.bp)

# @app.route('/')
# @app.route('/home/')
# def hello_flask():
#     return 'Hello, Flask App2'

# @app.route('/about/')
# def about():
#     return '회사 소개'

# @app.route('/contact/')
# def contact():
#     return '여기로 연락하세요'

# @app.route('/login/<name>')
# def login(name):
#     return f'{name}님 안녕하세요. 환영합니다'

# @app.route('/board/<int:id>')
# def board(id):
#     print(type(id))
#     return f'게시판 {id} 글 내용'