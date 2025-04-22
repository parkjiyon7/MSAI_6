from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

# 객체 생성
db = SQLAlchemy()
migrate = Migrate()