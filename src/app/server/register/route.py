import os
import bcrypt
from fastapi import APIRouter
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

router = APIRouter()

client = MongoClient(os.getenv('MONGO_URI'))
db = client[os.getenv('DATABASE_NAME')]

@router.get('/server/register')
def register(firstName: str, lastName: str, email: str, password: str):
    existing = db.Users.find_one({'email': email})

    if existing:
        return {
            'Valid': False,
            'message': 'User already exists'
        }

    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

    db.Users.insert_one({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': hashed
    })

    return {
        'Valid': True
    }