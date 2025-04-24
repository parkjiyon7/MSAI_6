import os

# 현재 파일 위치
BASE_DIR = os.path.dirname(__file__)

# 받은 경로에 DB 생성
SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'flaskproject_app.db'))
SQLALCHEMY_TRACK_MODIFICATIONS  = False

# 명령문 수행 보기(SQL문)
SQLALCHEMY_ECHO = True

#token_urlsafe(64)
SECRET_KEY='dev'