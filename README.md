


# TheMealApp

![The Meal App](https://github.com/horiaomar25/TheMealApp/assets/140801006/43ab4ce9-6fac-4263-b65f-008352347bb2)

This is a recipies application with authenication for the use to login. For the login, I used Supabase to help with Authenication. I was successfull able to log in and log out of my user. 
To deal with the large amounts of data from the categories section, I used pagination. This was a new concept to learn about and I was able use great resoures such as Educative to guide me through this. 

The data used is from the TheMealDB API. The user is able to click on the categories such as Chicken and see the list of chicken recipies. The user is able to click on the recipes and favourite their chosen recipe for quick access. I used localStorage to save the data into favourites as I am using a third party API. 



## Table of Contents

- [Tech Stack](#tech)
- [Server/Dataabse](#tech)
- [Lessons](#lessons)
- [Future Scope](#scope)
- [Installation](#installation)
- [Usage](#usage)

## Tech Stack
- Next.js - made use of the router to create a Home Page, Search, Categories, Favourites
- Styled with DaisyUI and TailwindCSS.


## Server/Database
TheMealDB API was used for the avaliable recipies. I made a fetch request.

I used localStorage to store the selected recipies into the favourites of my user. 

## Lessons Learned
In this project, this was my first time implementing pagination and using localStorage. Furthermore, it was great learing more about Supabase and Authenication. The documentation was simple and easy to understand. 

I was make use of slice and map to manipulate the data to display in the way I wanted. I really enjoyed 

## Future Scope
Looking to improve the homepage. Dark Mode to implemented. Will work on testing this. 

Currently to looking implement a server that will store the ingredients provide by theMealDB API to create a shopping list for the user!


## Installation

To run this project locally, follow these steps:

Clone the repository:

```git clone <repository_url>```

Install dependencies:

```npm install```

Start the server:

Run the following command to start the server:

```npm start```

This will launch the application using node server/app.js.
