from sqlalchemy import Column, Integer, String
from db.connection import Base
from sqlalchemy.orm import relationship


class WebRTCModel(Base):
    __tablename__ = "webrtc_data"

    id = Column(Integer, primary_key=True, index=True)
    data = Column(String)
    # You can add more fields as needed for your WebRTC data model

class WebRTCService:
    @staticmethod
    def process_webrtc_data(data):
        # Implement your WebRTC service logic here
        return {"processed_data": data}
