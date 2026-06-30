from pydantic import BaseModel


class Song(BaseModel):
    title: str
    artist: str
    album: str
    genre: str
    duration: str
    reason: str