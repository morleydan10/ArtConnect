from app import app
from models import Artist, Request, Business, Creative_Work, db
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

        # *************************SEED ARTISTS*************************

        artist_list = []
        # for artist_data in data["artists"]:
        artist_types = ['Paint-Canvas', 'Paint-Spray', 'Photographer', 'Videographer', 'Sculptor']
        artist_pics = ['https://pixabay.com/get/g76c22fb674a61cdf1f72a96d5ca092f6610840f4b0f02b66a150a5912f6fde7b9569056a469edf62cb8247f775a3e012_1280.jpg', 'https://pixabay.com/get/g30932b78e6fcf506c8259bcb80bfc4cbcbd63b1e60722697551f48f24ccdc2851d64583ff18ff6ce7ddda676142d05ba_1280.jpg', 'https://pixabay.com/get/g32ef20d15424e18fd3146f63c5b397efb4be944235fdf415bb6a11868f2454442d70994b3e0ba98b262032117a372403_1280.jpg']
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
                location = fake.city(),
                date_joined=fake.date_this_year(2023)
            )
            artist_list.append(a)
        db.session.add_all(artist_list)
        db.session.commit()

        # ******************SEED BUSINESSES***************************
        business_names = ['ABC Cafe', 'XYZ Law Firm', 'QRS Bookstore']
        business_types = ['Restaurant', 'Bookstore', 'Private Practice']
        business_pics = ['https://pixabay.com/get/g6d9a5c60736444d65b83c4b0baa5b85b0a24859c75c32f6cee87354c5e03365c035f672f333049d2ad4f8efba489a065_1280.jpg', 'https://pixabay.com/get/g015f1abe67b8d56492fe642c7cac3030a228b77bed054fc6cf68753b5bac9e50e6e669424d29991fc3d84e76dd0e5497_1280.png', 'https://pixabay.com/get/g9e7cfd5e508f8f7f48839983d875f6ddbc266efb88a3a00533e6a97048764f6f49bf06465ef6b6b738dc19ac4193a182_1280.png']

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
                location = fake.city(),
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
                artist_id=choice(artist_list).id,
                business_id=choice(business_list).id,
            )
            request_list.append(r)    
        db.session.add_all(request_list)
        db.session.commit()

        # ************************SEED CREATIVE WORKS********************** 

        creative_work_list = []

        file_list = ['https://pixabay.com/get/g71e178200d2c67e17203fcb881e01693912c41f6383556b252f8766baf1c17784f5b39a839164d041e95da9c39f2dcb4_1280.jpg', 'https://pixabay.com/get/g753ebf85fbe5ab00ba111fa7e1f0664b10faebcfb4b874ed70d56a014d6ce1032e12cb394e76b5ba37024002b9b48c2c_1280.jpg', 'https://pixabay.com/get/g4d912268e4153f4b0ad38a3fc26dc3a58d79012b8beddb4f3faf9580c9c3004ead531512f36705cda9f0575c29df9fd8_1280.png']

        for _ in range(3):
            cw = Creative_Work(
                description=fake.sentence(),
                artist_id= 1,
                file_url=choice(file_list)
            )
            creative_work_list.append(cw)
        db.session.add_all(creative_work_list)
        db.session.commit()

    print("Seeding complete")


