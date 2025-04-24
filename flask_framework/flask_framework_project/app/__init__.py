from flask import Flask
# from flask_migrate import Migrate
# from flask_sqlalchemy import SQLAlchemy
import config
from app.database import db, migrate
import os

import logging
from logging.handlers import RotatingFileHandler


def create_app(): 
    app = Flask(__name__)

    #app.config.from_object(config)
    app.config.from_envvar('APP_CONFIG_FILE')
    # 데이터 베이스 - 앱 연결
    db.init_app(app)
    # 데이터베이스 연결 ORM(라이브러리)
    migrate.init_app(app, db)

    # DB 모델 import
    from app import models

    from .views import main_view, auth_view, board_view, sql_view, question_view, answer_view, auth_view, mypage_view
    app.register_blueprint(main_view.bp)
    app.register_blueprint(auth_view.bp)
    app.register_blueprint(board_view.bp)
    # app.register_blueprint(sql_view.bp)
    app.register_blueprint(question_view.bp)
    app.register_blueprint(answer_view.bp)
    app.register_blueprint(mypage_view.bp)


    # log용 파일 생성
    if not os.path.exists('logs'):
        os.makedirs('logs')

    log_file = RotatingFileHandler('logs/app.log', maxBytes= 10420, backupCount=10, encoding='utf-8')
    log_file.setLevel(logging.DEBUG)

    app.logger.addHandler(log_file)
    app.logger.setLevel(logging.DEBUG)
    app.logger.info("app이 구동되었음")


    return app


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