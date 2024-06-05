# ArtConnect

ArtConnect is a platform designed to facilitate connections between local businesses and artists to fulfill creative needs.

## Table of Contents

- [Introduction](#artconnect)
- [Features](#features)
- [Installation](#installation)
- [Future Plans](#future-plans)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Features

### User Types

1. **Artists:**
   - Artists have a profile page where:
     - Their basic contact information is displayed.
     - Have a short bio about the work they do.
     - Can view any accepted bids they have made on a request.
     - Can build a portfolio by uploading files, showcasing their work.
   - Artists have access to the open requests page to view business-generated requests. Artists can submit bids on requests that align with their skills and interests.
   - Artists can browse other user profiles, including both artists and businesses.

<table>
  <tr>
    <td><img src="frontend/src/assets/ArtConnect Prof 1.png" height="200vh" width="433vw" /></td>
    <td><img src="frontend/src/assets/ArtConnect ArtProf 2.png" height="200vh" width="433vw" /></td>
  </tr>
   <tr>
    <td><img src="frontend/src/assets/ArtConnect OpenRequests.png" height="200vh" width="433vw" /></td>
    <td><img src="frontend/src/assets/ArtConnect ViewUsers.png" height="200vh" width="433vw" /></td>
  </tr>
</table>

2. **Businesses:**
   - Businesses have a profile page where:
     - Their basic contact information is displayed.
     - A table containing all the requests they have generated.
     - In the same table, they can view bids submitted by artists for each request.
     - Accept bids that best meet the needs of their projects.
   - Businesses have access to the open requests page to view business-generated requests.
   - Businesses can browse other user profiles, including both artists and businesses.
<table>
  <tr>
    <td><img src="frontend/src/assets/ArtConnect BusProf.png" height="200vh" width="433vw" /></td>
    <td><img src="frontend/src/assets/ArtConnect RequestTable.png" height="200vh" width="433vw" /></td>
  </tr>
</table>

## Installation

Follow these steps to set up ArtConnect:

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/artconnect.git
2. Open two terminals, one for the frontend, and one for the backend

### Frontend
1. Navigate to the frontend directory.
   ```bash
   cd frontend
2. Run the frontend server in your terminal.
   ```bash
   npm run dev

### Backend
1. In your second terminal, navigate to the backend directory, then to the server directory.
   ```bash
   cd backend
   cd server
2. Start a virtual environment in your terminal.
   ```bash
   pipenv shell
   ```
   Make sure that the virtual environment is within the server directory.
   Here's an example of what it should look like:
   
   ```bash
   (server) username@hostname:~/pathto/yourproject/ArtConnect/backend/server$
   ```
3. Run the backend server in your terminal.
   ```bash
   python app.py

## Future Plans

1. Enable messaging between users to allow for a more direct form of communication.
2. Implement a ratings and reviews system for businesses and artists who have worked with each other in the past.
3. Allow users to like and comment on portfolio items.

## Built with:

<p align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="flask" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html5" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" alt="sqlalchemy" width="45" height="45"/>
</p>

- Node.js
- React.js
- Python with Flask
- SQLAlchemy
- SQLite
- CSS3

## Configuration

If needed, configure ArtConnect by adjusting settings in the configuration files.

## Contributing

We welcome contributions to enhance ArtConnect. Feel free to submit bug reports, feature requests, or pull requests. For major changes, please open an issue first to discuss the proposed changes.

Let's collaborate and make ArtConnect a more robust platform for connecting artists and businesses!
