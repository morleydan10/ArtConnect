# ArtConnect

ArtConnect is a platform designed to facilitate connections between local businesses and artists to fulfill creative needs.

## Table of Contents

- [Introduction](#artconnect)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Features

### User Types

1. **Artists:**
   - Artists have a profile with basic contact information.
   - They can add a short bio to showcase their background and skills.
   - Artists can build a portfolio by uploading files, showcasing their work.
   - Access the open requests page to view business-generated requests.
   - Submit bids on requests that align with their skills and interests.
   - Browse user profiles, including both artists and businesses.

2. **Businesses:**
   - Businesses maintain a profile with basic contact information and a profile picture.
   - Access a table containing all the requests they have generated.
   - View bids submitted by artists for each request.
   - Accept bids that best meet the needs of their projects.

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

## Usage

To use ArtConnect, follow these general steps:

### Sign Up:

- Artists and businesses have separate signups.
- Provide the required information to create a profile.

### Profile Creation:

- Complete your profile with relevant details.

### Portfolio (Artists):

- Upload files to showcase your work in the portfolio.

### Requests (Businesses):

- Generate requests specifying your creative needs.

### Bidding (Artists):

- Browse open requests and submit bids.

### Request Management (Businesses):

- View bids for each request and accept the one that fits your requirements.

### Explore:

- Discover other users' profiles on the View Users Page.

## Built with:

- Node.js
- React.js
- Python with Flask
- SQLAlchemy

## Configuration

If needed, configure ArtConnect by adjusting settings in the configuration files.

## Contributing

We welcome contributions to enhance ArtConnect. Feel free to submit bug reports, feature requests, or pull requests. For major changes, please open an issue first to discuss the proposed changes.

Let's collaborate and make ArtConnect a more robust platform for connecting artists and businesses!
