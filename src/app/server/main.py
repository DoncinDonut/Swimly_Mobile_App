from fastapi import FastAPI
from login.route import router as login_router
from register.route import router as register_router

app = FastAPI()

app.include_router(login_router)
app.include_router(register_router)