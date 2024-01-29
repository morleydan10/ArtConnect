from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, Artist, Request, Business, Creative_Work

app = Flask(__name__)
CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False


migrate = Migrate(app, db)
db.init_app(app)


@app.get("/")
def index():
    return "ArtConnect is here."

# *****************ARTIST ROUTES****************************


# will have to change routes to api most liekly after adding proxy file
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
            profile_pic_url=data.get('profile_pic_url'),
            location=data.get('location'),
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
    except:
        return {"error", "validation errors"}, 400
    
@app.delete('/api/artists/<int:id>')
def delete_artist(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {"error": "Artist not found"}, 404
    
    db.session.delete(artist)
    db.session.commit()

    return {"message": "Artist deleted successfully"}, 200




# ******************BUSINESS ROUTES*************************

@app.get('/api/businesses/<int:id>')
def get_business_by_id(id):
    business = Business.query.get(id)

    if not business:
        return {'error': 'Business not found'}, 404

    return business.to_dict(), 200

@app.post('/api/businesses')
def post_new_business():

    try:
        data = request.json

        new_business = Business(
            name=data.get('name'),
            type=data.get('type'),
            profile_pic_url=data.get('profile_pic_url'),
            location=data.get('location'),
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
    except:
        return {"error", "validation errors"}, 400


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

    return [r.to_dict() for r in requests], 200



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

        new_request = Request(
            description=data.get('description'),
            business=data.get('business'),
            date_created=data.get('date_created')
        )

        db.session.add(new_request)
        db.session.commit()

    except Exception as e:
        return {'error': str(e)}

    return new_request.to_dict(), 201


@app.patch('/api/requests/<int:id>')
def patch_request(id):

    request_item = db.session.get(Request, id)

    if not request_item:
        return {"error": "Request not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(request, key, data[key])
        db.session.add(request_item)
        db.session.commit()
        return request_item.to_dict(), 202
    except:
        return {"error", "validation errors"}, 400


@app.delete('/api/requests/<int:id>')
def delete_request(id):

    request_item = db.session.get(Request, id)

    if not request_item:
        return {"error": "Request not found"}, 404
    
    db.session.delete(request_item)
    db.session.commit()
    return {"message": "Request deleted successfully"}, 200

# ********************************CREATIVE WORKS ROUTES*****************************

@app.get('/api/creative_works/<int:id>')
def get_creative_works_by_artist_id(id):

    artist = db.session.get(Artist, id)

    if not artist:
        return {'error': 'Artist not found'}, 404

    creative_works = Creative_Work.query.filter(Creative_Work.artist_id == id).all()

    return [cw.to_dict() for cw in creative_works], 200

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

        new_creative_work = Creative_Work(
            name=data.get('name'),
            type=data.get('type'),
            profile_pic_url=data.get('profile_pic_url'),
            location=data.get('location'),
            date_joined=data.get('date_joined')
        )
        db.session.add(new_creative_work)
        db.session.commit()
    except Exception as e:
        return {'error': str(e)}
    
    return new_creative_work.to_dict(), 201

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
    except:
        return {"error", "validation errors"}, 400
    
@app.delete('/api/creative_works/<int:id>')
def delete_creative_work(id):

    creative_work = db.session.get(Creative_Work, id)

    if not creative_work:
        return {"error": "Creative work not found"}, 404
    
    db.session.delete(creative_work)
    db.session.commit()

    return {"message": "Creative work deleted successfully"}, 200




if __name__ == "__main__":
    app.run(port=5555, debug=True)