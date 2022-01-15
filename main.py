from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from fastapi import Request


app = FastAPI()

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}

@app.post("/test/{test_id}")
async def test(test_id: int, request: Request):
    print("success")
    return await request.json()

app.mount("/", StaticFiles(directory="frontend", html=True), name="static")

# POST -> send stuff to backend
# PUT
# GET -> Get a basic html from backend
# DELETE