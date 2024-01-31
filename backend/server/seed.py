from app import app
from models import Artist, Request, Business, Creative_Work, Bid, db
# import json
# from flask_bcrypt import Bcrypt
from random import choice
from faker import Faker

fake = Faker ()

if __name__ == "__main__":
    with app.app_context():
        # bcrypt = Bcrypt(app)

        # Clear existing data
        print('clearing database ...')
        Artist.query.delete()
        Business.query.delete()
        Request.query.delete()
        Creative_Work.query.delete()
        Bid.query.delete()

        # *************************SEED ARTISTS*************************

        artist_list = []
        # for artist_data in data["artists"]:
        artist_types = ['Paint-Canvas', 'Paint-Spray', 'Photographer', 'Videographer', 'Sculptor']
        artist_pics = ['https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        for _ in range(5):
            # password_hash = bcrypt.generate_password_hash(artist_data.get('name'))
            a = Artist(
                # name=artist_data.get("name"),
                name=fake.name(),
                # type=artist_data.get("type"),
                type=choice(artist_types),
                # profile_pic_url=artist_data.get("profile_pic_url"),
                profile_pic_url=choice(artist_pics),
                # password_hash=password_hash,
                phone_number=fake.phone_number(),
                email=fake.free_email(),
                city = fake.city(),
                date_joined=fake.date_this_year(2023)
            )
            artist_list.append(a)
        db.session.add_all(artist_list)
        db.session.commit()

        # ******************SEED BUSINESSES***************************
        business_names = ['ABC Cafe', 'XYZ Law Firm', 'QRS Bookstore']
        business_types = ['Restaurant', 'Bookstore', 'Private Practice']
        business_pics = ['https://images.unsplash.com/photo-1508163356824-03f81a9d4e9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1546617112-b898399103ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1517767514384-f57a175f9138?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

        business_list = []

        # for business_data in data["businesses"]:
        for _ in range(5):
            b = Business(
                # name=business_data.get("name"),
                name=choice(business_names),
                # type=business_data.get("type"),
                type=choice(business_types),
                # profile_pic_url=business_data.get("profile_pic_url"),
                profile_pic_url=choice(business_pics),
                phone_number=fake.phone_number(),
                email=fake.free_email(),
                city = fake.city(),
                date_joined=fake.date_this_year(2023)
            )
            business_list.append(b)
        db.session.add_all(business_list)
        db.session.commit()

        # *************************SEED REQUESTS*******************

        request_list = []
        # for request_data in data["requests"]:
        for _ in range(5):
            r = Request(
                description=fake.paragraph(nb_sentences=3),
                date_created=fake.date_this_year(2023),
                compensation=fake.pricetag(),
                artist_id=choice(artist_list).id,
                business_id=choice(business_list).id,
            )
            request_list.append(r)    
        db.session.add_all(request_list)
        db.session.commit()

        # ************************SEED CREATIVE WORKS********************** 

        creative_work_list = []

        file_list = ['https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1528217580778-96e570819666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHNjdWxwdHVyZXxlbnwwfHwwfHx8MA%3D%3D']

        for _ in range(4):
            cw = Creative_Work(
                description=fake.sentence(),
                artist_id=choice(artist_list).id,
                file_url=choice(file_list)
            )
            creative_work_list.append(cw)
        db.session.add_all(creative_work_list)
        db.session.commit()

    print("Seeding complete")


