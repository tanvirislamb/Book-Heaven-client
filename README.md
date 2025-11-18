##The Book Haven — README.md

A full-stack digital library where authenticated users can explore, add, update, and delete books.
Backend: Node.js + Express + MongoDB Atlas. Frontend: React (single page app) + Firebase Authentication.

##Live site (client): https://the-book-heaven340.netlify.app


Table of contents

Project overview

Features

Tech stack

Data structure

API endpoints (summary)

Authentication & security

UI / UX notes

How to run locally

Deployment notes

Project requirements checklist

Extras & challenges implemented

Credits & license

Project overview

The Book Haven is a single-page application that demonstrates a full web app workflow: user authentication with Firebase, a RESTful API built with Express that talks to MongoDB Atlas, and a React client that uses Axios for data fetching and reacts to route changes without throwing errors on reload. Authenticated users can manage their own books (create / read / update / delete) and comment on book detail pages.

Features

Clean responsive layout with Navbar, Footer, and changing Main content by route.

Auth (Firebase): Login / Register (email/password + Google). Registered users see their avatar and displayName; non-logged users see Login/Register links.

Add / Update / Delete books (only owner can edit/delete). Images uploaded through ImgBB.

All Books page: table list with sorting by rating and “View Details” button.

My Books: table that lists logged-in user’s books with functional Edit/Delete actions.

Protected routes: /addBook, /myBooks, /updateBook/:id, /book/:id are private.

Loading spinner while fetching data and custom 404 page.

Toast notifications for success/error (no alert() used).

Commit history: client has ≥ 15 notable commits; server has ≥ 8 notable commits.

Responsive design (mobile/tablet/desktop) and consistent typography & spacing.

Tech stack

Client

React (Vite / Create React App — whichever you used)

React Router (single page routing)

Axios (data fetching)

Firebase Authentication (email/password + Google)

react-hot-toast (notifications)

date-fns (where dates needed)

CSS framework / utility: Tailwind CSS + optional daisyUI (or your chosen UI)

imgbb client integration for image hosting

Server

Node.js + Express

MongoDB Atlas (database)

dotenv for environment config

Cors, helmet (recommended), body-parser (built-in express.json)

ObjectId from mongodb or Mongoose (depending on your implementation)

Data structure (MongoDB document example)
{
  "_id": "ObjectId",
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fantasy",
  "rating": 4.5,
  "summary": "Short description of the book",
  "coverImage": "https://i.ibb.co/xxxxxx.jpg", // imgbb URL
  "userEmail": "user@example.com",
  "userName": "Full Name",
  "createdAt": "2025-11-18T...", 
  "comments": [
    {
      "userEmail": "commenter@example.com",
      "userName": "Commenter",
      "userPhoto": "https://...",
      "text": "Great book!",
      "createdAt": "2025-11-18T..."
    }
  ],
  "reviews": [
    {
      "userEmail": "...",
      "rating": 5,
      "text": "Short review",
      "createdAt": "..."
    }
  ]
}

API endpoints (summary)

Replace API_BASE with your deployed server, e.g. https://your-server-api.example.com

GET API_BASE/books — Get all books (supports query params for sorting/filtering).

GET API_BASE/books/latest?limit=6 — Get latest 6 books for Home.

GET API_BASE/books/:id — Get book details (private route on client; server can return public data).

POST API_BASE/books — Add a new book (protected; body contains book data).

PUT API_BASE/books/:id — Update a book (owner only).

DELETE API_BASE/books/:id — Delete a book (owner only).

POST API_BASE/books/:id/comments — Add comment to book.

GET API_BASE/users/:email/books — Get books by a user (used for My Books).

GET API_BASE/books/top-rated?limit=3 — Get top rated books.

Note: All protected endpoints check the client-provided Firebase token (recommended flow: client sends the Firebase ID token in Authorization: Bearer <token> header; server verifies it with Firebase Admin or own verification).

Authentication & security

Firebase Authentication handles registering, logging in, and retrieving user info (photoURL, displayName, email).

On client sign-in, the Firebase ID token is attached to requests that require authentication. The server verifies tokens and enforces that users can only edit/delete their own records.

Add your client domain to Firebase OAuth authorized domains (especially when deploying on Netlify/Surge).

Never commit .env files — use environment variables in your deployment providers.

Required environment variables (examples)

Server .env

MONGODB_URI=your_mongodb_connection_string
PORT=5000
IMG_BB_KEY=your_imgbb_api_key         # If server does imgbb uploads
FIREBASE_SERVICE_ACCOUNT_JSON=...     # or path to service account for verifying tokens


Client .env

VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
VITE_IMGBB_KEY=your_imgbb_client_key
REACT_APP_API_BASE=https://your-server-api.example.com

UI / UX notes & validations

Password validation enforced on registration: at least one uppercase, one lowercase, and minimum 6 characters.

No alert() used — react-hot-toast shows all success and failure messages.

Forms show inline field validation and friendly messages.

Navbar shows Login/Register when not authenticated; when logged in it shows user photo, tooltip with displayName, and a Log Out button.

On reload, private routes keep the user logged in (Firebase persists auth state). Ensure your auth context/provider subscribes to Firebase onAuthStateChanged and resolves before rendering private routes.

How to run locally
Client
# from client folder
cp .env.example .env      # fill in values
npm install
npm run dev              # or `npm start` depending on your setup

Server
# from server folder
cp .env.example .env     # fill in SERVER env values
npm install
npm run dev              # nodemon or `node index.js`


Open http://localhost:5173 (Vite) or your configured port.

Deployment notes

Client: Netlify / Surge / Firebase Hosting / Vercel (if you deploy frontend). Add your domain to Firebase authorized domains.

Server: Vercel / Render / DigitalOcean App Platform. Add environment variables in the provider dashboard. If using Firebase Admin SDK on server, provide service account securely.

Make sure CORS allows the client domain.

For imgbb uploads you can either: upload from client directly to ImgBB (preferred), or send image to server and have server upload to ImgBB (requires server key).

Project requirements checklist (what this repo includes)

 Navbar, Footer, Main content area (single page routing)

 Conditional rendering for user (Login/Register vs profile + Logout)

 Home page: banner + latest 6 dynamic books + static sections (Top Genres, Book of the Week)

 Authentication: Email/password + Google login + validation rules + toast messages

 CRUD for books: Add / Read / Update / Delete (owner-only)

 Image upload via ImgBB (no local base64 blobs)

 All Books page: table, rating, view details, sorting by rating

 My Books page: table filtered by logged-in user, Edit/Delete functional

 Protected Routes: /addBook, /myBooks, /updateBook/:id, /book/:id

 Loading spinner while fetching data

 Custom 404 page

 Axios used for all data requests

 Commit history: client (≥15 commits), server (≥8 commits) — ensure commits are present

 No Lorem ipsum used in UI text

 No alert() for success/error; using react-hot-toast

 Domain added to Firebase authorized domains (for deployed client)

 Logged in user remains logged-in on page reload for private routes

Extras / challenges implemented

Sorting on All Books by rating (ascending/descending).

Dark / light theme toggle persisted in localStorage.

Comments on book detail page (save user name, photo, comment in DB) with realtime-like updates (client polling or WebSocket optional).

Implemented react-hot-toast and date-fns packages.

Optional: Top Rated Books section on Home (top 3 via server $sort).

UI structure & routes (client)

/ — Home

/books — All Books (table + sorting)

/books/:id — Book Details (private route for some features e.g., commenting)

/addBook — Add Book (private)

/myBooks — My Books (private)

/updateBook/:id — Update Book (private)

/login — Login

/register — Register

* — 404 page

Notes on commit requirements

Make sure your Git history makes the work visible and meaningful:

Client: minimum 15 notable commits (e.g., feat: add navbar, feat: implement auth context, fix: book form validation, feat: implement dark mode, chore: deploy client to Netlify).

Server: minimum 8 notable commits (e.g., feat: setup express server, feat: connect to MongoDB, feat: create books routes, fix: add token verification middleware, feat: deploy to Vercel).

A short example of commit messages you can use:

feat(client): add navbar and routing

feat(client): implement Firebase auth context

feat(client): add AddBook form + imgbb integration

feat(client): myBooks page and delete/update actions

chore(server): setup express + mongodb connection

feat(server): implement CRUD endpoints for books

feat(server): add comment endpoints

fix(server): secure routes with Firebase token verification

Troubleshooting tips

If private routes redirect to login on reload, ensure the auth wrapper waits for Firebase onAuthStateChanged to finish before checking auth state.

If images don't upload, check your ImgBB key and CORS. If the client sends the imgbb key to client-side, register domain in ImgBB if required.

For Vercel deployments, set environment variables in project settings; avoid committing secrets.

Final notes

Replace the placeholder live URLs in this README with the real deployed client/server URLs before submission.

Double-check Firebase authorized domains to include your deployed client domain.

Confirm your GitHub repository shows the required number of notable commits on both client and server folders.