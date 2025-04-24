import os
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(__file__)
load_dotenv(os.path.join(BASE_DIR, '.env'))

SQLALCHEMY_DATABASE_URL = 'postgresql+psycopg2://{user}:{pw}@{url}/{db}'.format(
    user=os.getenv('DB_USER'),
    pw=os.getenv('DB_PASSWORD'),
    url=os.getenv('DB_HOST'),
    db=os.getenv('DB_NAME')
)

SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = b'Zb3\x81\x81\xd8\xef\x1d\xd9\x7d-Kn\xbd\xe8\x8f\xa5\x18'
