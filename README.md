# Photosphere

[Photosphere](https://photosphere-aa.herokuapp.com/#/) is a web application inspired by 500 Pixels and Flickr. It allows users to create a gallery of photos to show to other users.
## Technologies Used
* PostgreSQL
* Ruby on Rails
* React.js
* Redux
* JQuery
* SCSS

## Features
* Authenticated user accounts
* User can comment on photos
* User can like photos
* User can view photos by tags
* gallerys organized by tag, user, etc.


### Photos
Users can view the photo index on the site upon logging in, as well as the drone, portrait, and landscape gallerys.

### Liking Photos
Users can like/unlike any photos on any other user's gallery as well as their own photos on their own gallery.

### Tags
Photos can be grouped by tags and put in to their own gallerys. Tags for a specific photo will be added to the photo show page and are direct links to each tag photo gallery.

### comments
Users can leave comments on each individual photo in a gallery. They can also delete comments that belong to them

### Use of React Modal
![demo1](https://github.com/jdoyle5/photosphere/blob/master/Docs/Dec-01-2017%2013-41-38.gif)

![demo2](https://github.com/jdoyle5/photosphere/blob/master/Docs/Dec-01-2017%2013-43-36-2.gif)

### Use of columns and media queries to display photos dynamically
Users will see that the photo columns will resize depending on how big their browser window is.

![demo3](https://github.com/jdoyle5/photosphere/blob/master/Docs/dynamic-columns.gif)

## Future Additions
### Upload Photos
Utilization of Cloudinary's photo upload feature that will allow the user to grag and drop photos to upload. (Plan on being GA 3-4 weeks from now)
### Add Albums
User creation of albums of photos
### Implementation of Stripe
Users will be allowed to buy and sell photos from their gallery using Stripe.
### Infinite Scroll
Loading each individual photo from the database can be very time consuming and makes for an unpleasant user experience. Implementing infinite scroll will load only the photos that will be seen on the page at that time. Once the user starts scrolling, more photos will be loaded on to the page.
### User Profile Images
Users will be able to have their own profile image to be displayed. (Plan on being GA 3-4 weeks from now)
