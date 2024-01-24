# backend/controllers/webrtc.py
from fastapi import APIRouter, Depends, WebSocket
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from typing import List

router = APIRouter()
templates = Jinja2Templates(directory="templates")


@router.get("/webrtc", response_class=HTMLResponse)
def get_webrtc_page(request: Request):
    return templates.TemplateResponse("webrtc.html", {"request": request})


@router.websocket("/ws/webrtc")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        # Process the WebRTC data using your service logic
        processed_data = WebRTCService.process_webrtc_data(data)
        await websocket.send_text(processed_data)
