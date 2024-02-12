from flask import Flask, request, session
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from dotenv import dotenv_values
# from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, unset_jwt_cookies
from models import db, Artist, Request, Business, Creative_Work, Bid
import datetime
import base64

config = dotenv_values(".env")

app = Flask(__name__)
app.secret_key = config['FLASK_SECRET_KEY']
# app.jwt_secret_key = config['JWT_SECRET_KEY']
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['PERMANENT_SESSION_LIFETIME'] = datetime.timedelta(hours=2)
app.json.compact = False
# jwt = JWTManager(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

db.init_app(app)


@app.get("/")
def index():
    return "ArtConnect is here."


# *************************AUTHENTICATION-ARTIST**********************

@app.post('/api/create_new_artist')
def create_new_artist():
    try:
        data = request.json

        password_hash = bcrypt.generate_password_hash(data.get("password"))

        newArtist= Artist(
            name=data.get('name'),
            email=data.get('email'),
            city=data.get('city'),
            phone_number=data.get('phone_number'),
            type=data.get('type'),
            username=data.get('username'),
            date_joined=data.get('date_joined'),
            password_hash= password_hash
        )

        db.session.add(newArtist)
        db.session.commit()
        # access_token = create_access_token(identity=newArtist.id)
        session["artist_id"] = newArtist.id
        session["user_type"] = "artist"
        session.permanent = True
        print("success")
    
    except Exception as e:
        print(e)
        return {'Error': str(e)}, 400
    
    return newArtist.to_dict(rules=['-password_hash']), 200
    # return {'access_token': access_token, 'artist': newArtist.to_dict(rules=['-password_hash'])}, 200


@app.get('/api/check_artist_session')
# @jwt_required()
def check_artist_session():

    # current_user_id = get_jwt_identity()
    # artist = Artist.query.get(current_user_id)
    # artist = db.session.get(Artist, 6)
    artist = db.session.get(Artist, session.get("artist_id"))
    user_type = session.get("user_type")
    
    print(artist)
    # print(artist.name)
    # user_type = 'artist'
    if artist and (user_type == "artist"):
        # print(artist.to_dict(rules=['-password_hash']))
        # return {"test":"test"}
        from sys import getsizeof
        print('artist bytes')
        print(getsizeof(artist.to_dict(rules=['-password_hash', '-creative_works'])))
        return artist.to_dict(rules=['-password_hash', '-creative_works']), 200
    else:
        return {'Message': 'No user logged in'}, 404

@app.delete('/api/artist_logout')
# @jwt_required()
def logout_artist():

    try: 
        # unset_jwt_cookies()
        session.pop("artist_id")
        return {"Message": "Logged out"}, 200
    
    except Exception as e:
        print(str(e))
        return {'Message': 'No user logged in'}, 404


@app.post('/api/artist_login')
def login_artist():
    
    print("request")
    data = request.json

    artist = Artist.query.filter(Artist.username == data.get('username')).first()
    print(data)
    print(artist)
    if artist and bcrypt.check_password_hash(artist.password_hash, data.get('password')):
        session["artist_id"] = artist.id
        session["user_type"] = "artist"
        session.permanent = True
        # access_token = create_access_token(identity=artist.id)

        print(session['artist_id'])
        print(session['user_type'])
        print("success")
        return artist.to_dict(rules=['-password_hash', '-creative_works']), 200
        # return {'access_token': access_token, 'artist': artist.to_dict(rules=['-password_hash'])}, 200
    else:
        return {"error": "Invalid username or password"}, 401

# *************************AUTHENTICATION-BUSINESS**********************************

@app.post('/api/create_new_business')
def create_new_business():

    try:
        data = request.json

        password_hash = bcrypt.generate_password_hash(data.get("password"))

        newBusiness= Business(
            name=data.get('name'),
            email=data.get('email'),
            city=data.get('city'),
            phone_number=data.get('phone_number'),
            type=data.get('type'),
            username=data.get('username'),
            date_joined=data.get('date_joined'),
            password_hash= password_hash
        )

        db.session.add(newBusiness)
        db.session.commit()
        session["business_id"] = newBusiness.id
        session['user_type'] = "business"
        session.permanent = True
        print("success")
        # access_token = create_access_token(identity=newBusiness.id)
    
    except Exception as e:
        print(e)
        return {'Error': str(e)}, 400
    
    return newBusiness.to_dict(rules=['-password_hash']), 200
    # return {'access_token': access_token, 'business': newBusiness.to_dict(rules=['-password_hash'])}, 200


@app.get('/api/check_business_session')
# @jwt_required()
def check_business_session():

    # current_user_id = get_jwt_identity()
    # business = Business.query.get(current_user_id)
    # business = db.session.get(Business, 6)
    business = db.session.get(Business, session.get("business_id"))

    user_type = session.get("user_type")
    # user_type = 'business'
    # print to check the session object
    # print(current_user_id)
    print(business)
    # print(business.name)

    if business and (user_type == 'business'):
        return business.to_dict(rules=['-password_hash']), 200
    else:
        return {'Message': 'No user logged in'}, 404

@app.delete('/api/business_logout')
# @jwt_required()
def logout_business():

    try: 
        # unset_jwt_cookies()
        session.pop("business_id")
        return {"Message": "Logged out"}, 200
    
    except:
        return {'Message': 'No user logged in'}, 404


@app.post('/api/business_login')
def login_business():
    
    print("request")
    data = request.json

    business = Business.query.filter(Business.username == data.get('username')).first()
    print(data)
    print(business)
    if business and bcrypt.check_password_hash(business.password_hash, data.get('password')):
        # access_token = create_access_token(identity=business.id)
        session["business_id"] = business.id
        session['user_type'] = "business"
        session.permanent = True
        print("success")

        return business.to_dict(rules=['-password_hash']), 200
        # return {'access_token': access_token, 'business': business.to_dict(rules=['-password_hash'])}, 200
    else:
        return {"error": "Invalid username or password"}, 401

# ******************************ARTIST ROUTES****************************

@app.get('/api/artists')
def get_all_artists():

    artists = Artist.query.all()

    return [artist.to_dict(rules=['-bids', '-requests', '-creative_works']) for artist in artists], 200

@app.get('/api/artists/<int:id>')
def get_artist_by_id(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {'error' : 'Artist not found'}, 404
    
    return artist.to_dict(), 200 

@app.post('/api/artists')
def post_new_artist():

    try:
        data = request.json

        new_artist= Artist(
            name=data.get('name'),
            type=data.get('type'),
            email=data.get('email'), 
            phone_number=data.get('phone_number'),
            profile_pic_url=data.get('profile_pic_url'),
            city=data.get('city'),
            date_joined=data.get('date_joined')
        )
        db.session.add(new_artist)
        db.session.commit()
    except Exception as e:
        return {'error': str(e)}
    
    return new_artist.to_dict(), 201

@app.patch('/api/artists/<int:id>')
def patch_artist(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {"error": "Artist not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(artist, key, data[key])
        db.session.add(artist)
        db.session.commit()
        return artist.to_dict(), 202
    except Exception as e:
        print(e)
        return {"error": "Validation errors"}, 400
    
@app.delete('/api/artists/<int:id>')
def delete_artist(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {"error": "Artist not found"}, 404
    
    db.session.delete(artist)
    db.session.commit()

    return {"message": "Artist deleted successfully"}, 200

# ******************BUSINESS ROUTES*************************

@app.get('/api/businesses')
def get_all_businesses():

    businesses = Business.query.all()

    return [business.to_dict(rules=['-requests']) for business in businesses], 200

@app.get('/api/businesses/<int:id>')
def get_business_by_id(id):
    business = Business.query.get(id)

    if not business:
        return {'error': 'Business not found'}, 404

    return business.to_dict(rules=['-requests']), 200

@app.post('/api/businesses')
def post_new_business():

    try:
        data = request.json

        new_business = Business(
            name=data.get('name'),
            type=data.get('type'),
            profile_pic_url=data.get('profile_pic_url'),
            email=data.get('email'), 
            phone_number=data.get('phone_number'),
            city=data.get('city'),
            date_joined=data.get('date_joined')
        )

        db.session.add(new_business)
        db.session.commit()

    except Exception as e:
        return {'error': str(e)}

    return new_business.to_dict(), 201


@app.patch('/api/businesses/<int:id>')
def patch_business(id):

    business = db.session.get(Business, id)

    if not business:
        return {"error": "Business not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(business, key, data[key])
        db.session.add(business)
        db.session.commit()
        return business.to_dict(), 202
    except Exception as e:
        print(e)
        return {"error": "Validation errors"}, 400


@app.delete('/api/businesses/<int:id>')
def delete_business(id):

    business = db.session.get(Business, id)

    if not business:
        return {"error": "Business not found"}, 404
    
    db.session.delete(business)
    db.session.commit()
    return {"message": "Business deleted successfully"}, 200



# *****************REQUEST ROUTES**************************
@app.get('/api/requests')
def get_all_requests():

    requests = Request.query.all()

    return [r.to_dict(rules=['-artist.bids', 'bids', '-artist.creative_works', '-business.password_hash']) for r in requests], 200

@app.get('/api/requests/<int:id>')
def get_requests_by_business_id(id):

    business = db.session.get(Business, id)

    if not business:
        return {'error': 'Request not found'}, 404
    
    requests = Request.query.filter(Request.business_id == id).all()

    return [r.to_dict(rules=['-business.requests', '-business.password_hash', '-artist', '-bids']) for r in requests], 200

@app.get('/api/requests/<int:id>')
def get_requests_by_artist_id(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {'error': 'Request not found'}, 404
    
    requests = Request.query.filter(Request.artist_id == id).all()

    return [r.to_dict(rules=['-artist.bids', '-business', 'bids']) for r in requests], 200


@app.get('/api/requests/<int:id>')
def get_request_by_id(id):
    request = Request.query.get(id)

    if not request:
        return {'error': 'Request not found'}, 404

    return request.to_dict(), 200

@app.post('/api/requests')
def post_new_request():


    try:
        data = request.json
        print('Received data:', data)

        new_request = Request(
            business_id=data.get('business_id'),
            description=data.get('description'),
            compensation=data.get('compensation'),
            date_created=data.get('date_created')
        )

        db.session.add(new_request)
        db.session.commit()
        print('post successful')

    except Exception as e:
        return {'error': str(e)}
    
    return new_request.to_dict(), 201



@app.patch('/api/requests/<int:id>')
def patch_request(id):

    request_item = db.session.get(Request, id)
    data = request.json
    print(request.json)

    if not request_item:
        return {"error": "Request not found"}, 404
    try:
        for key in data:
            setattr(request_item, key, data[key])
        db.session.add(request_item)
        db.session.commit()
        return request_item.to_dict(rules=['-artist','-bids','-business']), 202
    except Exception as e:
        print(e)
        return {"error": "validation errors"}, 400


@app.delete('/api/requests/<int:id>')
def delete_request(id):

    request_item = db.session.get(Request, id)

    if not request_item:
        return {"error": "Request not found"}, 404
    
    db.session.delete(request_item)
    db.session.commit()
    return {"message": "Request deleted successfully"}, 200

# ********************************CREATIVE WORKS ROUTES*****************************
# Need to fix serialization rules for recurrsion errors

@app.get('/api/creative_works/<int:id>')
def get_creative_works_by_artist_id(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {'error': 'Artist not found'}, 404

    creative_works = Creative_Work.query.filter(Creative_Work.artist_id == id).all()

    return [{'file': base64.b64decode(cw.file), **cw.to_dict()} for cw in creative_works], 200

# @app.get('/api/creative_works/<int:id>')
# def get_creative_work_by_id(id):

#     creative_work = db.session.get(Creative_Work, id)

#     if not creative_work:
#         return {'error': 'Creative work not found'}, 404
    
#     return creative_work.to_dict(), 200 

@app.post('/api/creative_works')
def post_new_creative_work():

    try:
        data = request.json
        print('Received data:', data)

        # decoded_file = base64.b64decode(data.get('file'))
        # print(decoded_file)


        new_creative_work = Creative_Work(
            artist_id=data.get('artist_id'),
            description=data.get('description'),
            file=data.get('file')
        )
        db.session.add(new_creative_work)
        db.session.commit()
    except Exception as e:
        return {'error': str(e)}
    
    return new_creative_work.to_dict(rules=['-file']), 201

@app.patch('/api/creative_works/<int:id>')
def patch_creative_work(id):

    creative_work = db.session.get(Creative_Work, id)

    if not creative_work:
        return {"error": "Creative work not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(creative_work, key, data[key])
        db.session.add(creative_work)
        db.session.commit()
        return creative_work.to_dict(), 202
    except Exception as e:
        print(e)
        return {"error": "Validation errors"}, 400
    
@app.delete('/api/creative_works/<int:id>')
def delete_creative_work(id):

    creative_work = db.session.get(Creative_Work, id)

    if not creative_work:
        return {"error": "Creative work not found"}, 404
    
    db.session.delete(creative_work)
    db.session.commit()

    return {"message": "Creative work deleted successfully"}, 200


# ************************BIDS ROUTES **************************
@app.get('/api/bids')
def get_all_bids():

    bids = Bid.query.all()

    return [b.to_dict(rules=['-artist.creative_works']) for b in bids], 200

@app.get('/api/bids/<int:id>')
def get_bids_by_request_id(id):

    request = db.session.get(Request, id)

    if not request:
        return {'error': 'Request not found'}, 404
    
    bids = Bid.query.filter(Bid.request_id == id).all()


    return [b.to_dict(rules=[ '-artist.bids', '-request','-artist.requests']) for b in bids], 200

@app.post('/api/bids')
def post_new_bid():

    try:
        data = request.json
        print('Received data:', data)

        new_bid = Bid(
            artist_id=data.get('artist_id'),
            request_id=data.get('request_id'),
            accepted=data.get('accepted')
        )

        db.session.add(new_bid)
        db.session.commit()
        print('post successful')

    except Exception as e:
        return {'error': str(e)}
    
    return new_bid.to_dict(), 201


# Business will patch the Accepted attribute
@app.patch('/api/bids/<int:id>')
def patch_bid(id):

    bid = db.session.get(Bid, id)

    if not bid:
        return {"error": "Bid not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(bid, key, data[key])
        db.session.add(bid)
        db.session.commit()
        return bid.to_dict(rules=['-artist','-request']), 202
    except Exception as e:
        print(e)
        return {"error": "Validation errors"}, 400



if __name__ == "__main__":
    app.run(port=5555, debug=True)