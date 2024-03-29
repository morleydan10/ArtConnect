from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

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
    serialize_rules = ["-requests.artist", '-creative_works.artist', '-bids.artist', '-password_hash', '-username']
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password_hash = db.Column(db.String)
    phone_number = db.Column(db.String)
    type = db.Column(db.String)
    # May have to change below to match file type, i.e jpeg, png
    profile_pic_url = db.Column(db.String)
    city = db.Column(db.String)
    date_joined = db.Column(db.String, nullable=False)
    bio = db.Column(db.String)
    requests = db.relationship("Request", back_populates="artist")
    creative_works = db.relationship('Creative_Work', back_populates="artist")
    bids = db.relationship("Bid", back_populates="artist")
    # @validates("name")
    # def validate_name(self, key, name):
    #     print(f"key {key} name {name}")
    #     if not name or "z" in name.lower():
    #         raise ValueError("")
    #     return name

class Creative_Work(db.Model, SerializerMixin):
    __tablename__ = "creative_works_table"
    serialize_rules = ['-artist.creative_works', '-artist.password_hash', '-artist.username']

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    artist_id = db.Column(db.Integer, db.ForeignKey("artist_table.id"))
    # May have to change below to match file type, i.e jpeg, png, or video file
    file = db.Column(db.String, unique=True)


    artist = db.relationship('Artist', back_populates="creative_works")


class Request(db.Model, SerializerMixin):
    __tablename__ = "request_table"
    serialize_rules = ["-artist.requests", "-artist.bids", "-artist.password_hash", "-artist.username", "-business.requests", '-business.password_hash', '-business.username', "-bids.request",'-bids.artist']
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    date_created = db.Column(db.String, nullable=False)
    compensation = db.Column(db.Integer)
    # open = db.Column(db.Integer)

    artist_id = db.Column(db.Integer, db.ForeignKey("artist_table.id"))
    # artist_name = db.Column(db.String, db.ForeignKey("artist_table.name"))

    business_id = db.Column(db.Integer, db.ForeignKey("business_table.id"))
    # business_name = db.Column(db.String, db.ForeignKey("business_table.name"))
    

    artist = db.relationship("Artist", back_populates="requests")
    business = db.relationship("Business", back_populates="requests")
    bids = db.relationship("Bid", back_populates="request")


class Business(db.Model, SerializerMixin):
    __tablename__ = "business_table"
    serialize_rules = ["-requests.business", '-password_hash', '-username']
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password_hash = db.Column(db.String)
    phone_number = db.Column(db.String)
    type = db.Column(db.String)
    # May have to change below to match file type, i.e jpeg, png
    profile_pic_url = db.Column(db.String)
    city= db.Column(db.String)
    date_joined = db.Column(db.String, nullable=False)
    # password_hash = db.Column(db.String)

    requests = db.relationship("Request", back_populates="business")



class Bid(db.Model, SerializerMixin):
    __tablename__="bids_table"
    serialize_rules = ["-request.bids", "-artist.bids", "-artist.password_hash", "-artist.username", "-request.business.password_hash", "-request.business.username"]

    id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.Integer, db.ForeignKey("artist_table.id"), nullable=False)
    request_id = db.Column(db.Integer, db.ForeignKey("request_table.id"), nullable=False)
    accepted = db.Column(db.Boolean, default=False)

    __table_args__ = (db.UniqueConstraint('artist_id', 'request_id', name='unique_artist_request'),)

    request = db.relationship("Request", back_populates="bids")
    artist = db.relationship("Artist", back_populates="bids")

