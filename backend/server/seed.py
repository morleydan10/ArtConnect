from app import app
from models import Artist, Request, Business, Creative_Work, Bid, db
# import json
from flask_bcrypt import Bcrypt
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

        artist_data = [
    {
        "name": "Brandon Bishop", 
        "type": "Photographer", 
        "profile_pic_url": "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "phone_number": "(640) 655-6789", 
        "email": "bbishop@gmail.com", 
        "city": "Astoria, NY", 
        "date_joined": "01/01/2024",
        "bio": "I'm Gregory, an avant-garde photographer from Astoria. My work blends surrealism and documentary, capturing the beauty of urban landscapes and transforming everyday scenes into mesmerizing visual narratives."
    },
    {   
        "name": "Sheila Wallace", 
        "type": "Paint-Canvas", 
        "profile_pic_url": "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "phone_number": "(505) 897-5643", 
        "email": "swpics200@gmail.com", 
        "city": "Long Island City, NY", 
        "date_joined": "01/02/2023",
        "bio": "Hi, I'm Sheila, a canvas painter in Long Island City. I draw inspiration from nature and urban landscapes, creating paintings that harmonize color, emotion, and texture, inviting viewers into a world of enchantment and introspection."
    },
    {
        "name": "Whitney Reed", 
        "type": "Paint-Spray", 
        "profile_pic_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "phone_number": "(987) 654-3210", 
        "email": "whitre142@hotmail.com", 
        "city": "Dumbo, NY", 
        "date_joined": "03/23/2023",
        "bio": "I'm Whitney, a dynamic spray painter from Dumbo, NY. My bold and vibrant street art in the eclectic neighborhood reflects a fusion of street culture, abstract forms, and social commentary, adding a burst of color and creativity to the urban landscape."
    }
]
        # for artist_data in data["artists"]:
        # artist_types = ['Paint-Canvas', 'Paint-Spray', 'Photographer', 'Videographer']
        # artist_pics = ['https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
        for artist in artist_data:
            # password_hash = bcrypt.generate_password_hash(artist_data["name"])
            a = Artist(
                name=artist_data["name"],
                type=artist_data["type"],
                profile_pic_url=artist_data["profile_pic_url"],
                # password_hash=password_hash,
                phone_number=artist_data["phone_number"],
                email=artist_data["email"],
                city=artist_data["city"],
                date_joined=artist_data["date_joined"],
                bio=artist_data["bio"]
            )
            artist_list.append(a)
        db.session.add_all(artist_list)
        db.session.commit()

        # ******************SEED BUSINESSES***************************
        # business_names = ['ABC Cafe', 'XYZ Law Firm', 'QRS Bookstore']
        # business_types = ['Restaurant', 'Bookstore', 'Private Practice']
        # business_pics = ['https://images.unsplash.com/photo-1508163356824-03f81a9d4e9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1546617112-b898399103ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1517767514384-f57a175f9138?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

        business_list = []

        business_data = [
    {
        "name": "XYZ Bookstore", 
        "type": "Bookstore", 
        "profile_pic_url": "https://images.unsplash.com/photo-1517767514384-f57a175f9138?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "phone_number": "(255) 648-7894", 
        "email": "xyz@hotmail.com", 
        "city": "Bushwick, NY", 
        "date_joined": "05/18/2023"
    },
    {
        "name": "QRS Cafe", 
        "type": "Restaurant/Cafe", 
        "profile_pic_url": "https://images.unsplash.com/photo-1508163356824-03f81a9d4e9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "phone_number": "(647) 484-7854", 
        "email": "qrscafe@gmail.com", 
        "city": "Astoria, NY", 
        "date_joined": "03/15/2023"
    },
    {
        "name": "Hot Dawgs", 
        "type": "Restaurant/Cafe", 
        "profile_pic_url": "https://images.unsplash.com/photo-1546617112-b898399103ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        "phone_number": "(335) 333-7945", 
        "email": "hot_dawgs50@gmail.com", 
        "city": "Coney Island, NY", 
        "date_joined": "01/24/2024"
    },
]

        # for business_data in data["businesses"]:
        for business in business_data:
            # password_hash = bcrypt.generate_password_hash(artist_data["name"])
            b = Business(
                name=business_data["name"],
                type=business_data["type"],
                profile_pic_url=business_data["profile_pic_url"],
                phone_number=business_data["phone_number"],
                email=business_data["email"],
                city=business_data["city"],
                date_joined=business_data["date_joined"]
            )
            business_list.append(b)
        db.session.add_all(business_list)
        db.session.commit()

        # *************************SEED REQUESTS*******************

        request_list = []
        # for request_data in data["requests"]:
        for _ in range(5):
            r = Request(
                description=fake.paragraph(nb_sentences=1),
                date_created=fake.date_this_year(2023, 2024),
                compensation=fake.pricetag(),
                artist_id=choice(artist_list).id,
                business_id=choice(business_list).id,
            )
            request_list.append(r)    
        db.session.add_all(request_list)
        db.session.commit()

        # ************************SEED CREATIVE WORKS********************** 

        creative_work_list = []

        # file_list = ['https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1528217580778-96e570819666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHNjdWxwdHVyZXxlbnwwfHwwfHx8MA%3D%3D']


        photographs = ["https://lik.com/cdn/shop/products/Peter-Lik-Brooklyn-Magic-Framed-Recess-Mount_1800x.jpg?v=1585069986", "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
        paint_spray_list = ["C:\Users\morle\OneDrive\Pictures\ArtConnect Images\Spray-Paint-Murals 1.jpg", "C:\Users\morle\OneDrive\Pictures\ArtConnect Images\Spray-Paint-Murals 2.jpg", "C:\Users\morle\OneDrive\Pictures\ArtConnect Images\Spray-Paint-Murals 3.jpg"]
        paint_canvs_list = ["C:\Users\morle\OneDrive\Pictures\ArtConnect Images\Paint-canvas 3.jpg", "C:\Users\morle\OneDrive\Pictures\ArtConnect Images\Paint-canvas 2.jpg", "C:\Users\morle\OneDrive\Pictures\ArtConnect Images\Paint-canvas 1.jpg"]

        for _ in range(3):
            cw = Creative_Work(
                description=fake.sentence(),
                artist_id=1,
                file=choice(photographs)
            )
            creative_work_list.append(cw)

        for _ in range(3):
            cw = Creative_Work(
                description=fake.sentence(),
                artist_id=2,
                file=choice(paint_canvs_list)
            )
            creative_work_list.append(cw)

        for _ in range(2):
            cw = Creative_Work(
                description=fake.sentence(),
                artist_id=3,
                file=choice(paint_spray_list)
            )
            creative_work_list.append(cw)


        db.session.add_all(creative_work_list)
        db.session.commit()

    print("Seeding complete")

