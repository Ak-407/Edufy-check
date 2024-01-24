# backend/services/webrtc.py
from sqlalchemy.orm import Session
from models.webrtc import WebRTCModel


def save_webrtc_data_service(data: str, db: Session):
    webrtc_data = WebRTCModel(data=data)
    db.add(webrtc_data)
    db.commit()
    db.refresh(webrtc_data)
    return webrtc_data


def get_webrtc_data_service(webrtc_id: int, db: Session):
    webrtc_data = db.query(WebRTCModel).filter(WebRTCModel.id == webrtc_id).first()
    return webrtc_data
