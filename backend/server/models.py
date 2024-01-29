from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
import datetime

metadata = MetaData(
    naming_convention={
        "ix": "ix_%(column_0_label)s",
        "uq": "uq_%(table_name)s_%(column_0_name)s",
        "ck": "ck_%(table_name)s_%(constraint_name)s",
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
        "pk": "pk_%(table_name)s",
    }
)
db = SQLAlchemy(metadata=metadata)



class Artist(db.Model, SerializerMixin):
    __tablename__ = "artist_table"
    serialize_rules = ["-requests.artist", '-creative_works.artist']
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, )
    # May have to change below to match file type, i.e jpeg, png
    profile_pic_url = db.Column(db.String)
    location= db.Column(db.String)
    date_joined = db.Column(db.DateTime, nullable=False)
    # password_hash = db.Column(db.String)
    requests = db.relationship("Request", back_populates="artist")
    creative_works = db.relationship('Creative_Work', back_populates="artist")

    # @validates("name")
    # def validate_name(self, key, name):
    #     print(f"key {key} name {name}")
    #     if not name or "z" in name.lower():
    #         raise ValueError("")
    #     return name

class Creative_Work(db.Model, SerializerMixin):
    __tablename__ = "creative_works_table"
    serialize_rules = ['-artist.creative_works']

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey("artist_table.id"))
    # May have to change below to match file type, i.e jpeg, png, or video file
    file_url = db.Column(db.String)


    artist = db.relationship('Artist', back_populates="creative_works")


class Request(db.Model, SerializerMixin):
    __tablename__ = "request_table"
    serialize_rules = ["-artist.requests", "-business.requests"]
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    date_created = db.Column(db.DateTime, nullable=False)
    compensation = db.Column(db.Integer)
    # open = db.Column(db.Integer)

    artist_id = db.Column(db.Integer, db.ForeignKey("artist_table.id"))
    # artist_name = db.Column(db.String, db.ForeignKey("artist_table.name"))

    business_id = db.Column(db.Integer, db.ForeignKey("business_table.id"))
    # business_name = db.Column(db.String, db.ForeignKey("business_table.name"))
    

    artist = db.relationship("Artist", back_populates="requests")
    business = db.relationship("Business", back_populates="requests")


class Business(db.Model, SerializerMixin):
    __tablename__ = "business_table"
    serialize_rules = ["-requests.business"]
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    type = db.Column(db.String)
    # May have to change below to match file type, i.e jpeg, png
    profile_pic_url = db.Column(db.String)
    location= db.Column(db.String)
    date_joined = db.Column(db.DateTime, nullable=False)
    # password_hash = db.Column(db.String)

    requests = db.relationship("Request", back_populates="business")





