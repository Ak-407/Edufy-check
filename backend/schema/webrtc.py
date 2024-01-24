# backend/schemas/webrtc.py
from pydantic import BaseModel

class WebRTCSchema(BaseModel):
    data: str

    class Config:
        schema_extra = {
            "example": {
                "data": "your_webRTC_data_here"
            }
        }
