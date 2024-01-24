# backend/routers/webrtc.py
from fastapi import APIRouter
from schema.webrtc import WebRTCSchema

router = APIRouter(
    prefix="/webrtc",
    tags=["webrtc"]
)

@router.post("/process_data")
def process_webrtc_data(data: WebRTCSchema):
    # Implement your logic to process WebRTC data here
    # Access the WebRTC data using data.data
    return {"message": "WebRTC data processed successfully"}
