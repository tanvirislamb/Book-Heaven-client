##The Book Haven — README.md

A full-stack digital library where authenticated users can explore, add, update, and delete books.
Backend: Node.js + Express + MongoDB Atlas. Frontend: React (single page app) + Firebase Authentication.

##Live site (client): https://the-book-heaven340.netlify.app


##Project overview

The Book Haven is a single-page application that demonstrates a full web app workflow: user authentication with Firebase, a RESTful API built with Express that talks to MongoDB Atlas, and a React client that uses Axios for data fetching and reacts to route changes without throwing errors on reload. Authenticated users can manage their own books (create / read / update / delete) and comment on book detail pages.

##Features

Clean responsive layout with Navbar, Footer, and changing Main content by route.

Auth (Firebase): Login / Register (email/password + Google). Registered users see their avatar and displayName; non-logged users see Login/Register links.

Add / Update / Delete books (only owner can edit/delete).

All Books page: table list with sorting by rating and “View Details” button.

My Books: table that lists logged-in user’s books with functional Edit/Delete actions.

Protected routes: /myBooks, /book/:id are private.

Loading spinner while fetching data and custom 404 page.

Toast notifications for success/error 

Responsive design (mobile/tablet/desktop) and consistent typography & spacing.


##Data structure (MongoDB document example)
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
}

"comments":
    {
      "userEmail": "commenter@example.com",
      "userName": "Commenter",
      "userPhoto": "https://...",
      "text": "Great book!",
      "createdAt": "2025-11-18T..."
    }

 "user":{
    "_id": "ObjectId",
    "userId": "useruid"
    "photoURL": "user cover photo"
 }   
