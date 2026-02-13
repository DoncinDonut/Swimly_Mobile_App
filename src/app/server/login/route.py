import os
from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

app = FastAPI()
client = MongoClient(os.getenv('MONGO_URI'))
db = client[os.getenv('DATABASE_NAME')]

@app.get('/server/login')
def login(email: str, password: str):
    user = db.Users.find_one({'email': email, 'password': password})

    if user:
        return {'Valid': True}
    else:
        return {'Valid': False}
