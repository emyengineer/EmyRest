# Restaurant Reviews App Project
# Nano Degree project No. Six

## Table of Contents

* [Instructions](#instructions)
    * [Definition](#Definition)
    * [Project Rules](#Rules)
* [Install](#Install)
* [Run the project](#Run)
* [Contributing](#contributing)
* [About](#About)

## Instructions

##  Restaurant Reviews App Project
# Definition
_a dynamic responsive webpage  mobile-ready web application. In Stage One, It has   accessibility feautures like Focus, ARIA-Labels and ARIA roles added to give semantic meaning to page elements for people who suffer from visual impairment or even blind. The design is converted to be responsive on different sized displays and accessible for screen reader use. Off line caching feature is added to the application by caching some assets for offline use and still have ability to use the application if the network is disconnected_

# Project Rubric Rules:
* Is the site UI compatible with a range of display sizes?
* All content is responsive and displays on a range of display sizes.
    * -- Content should make use of available screen real estate and should display correctly at all screen sizes.
    * -- An image's associated title and text renders next to the image in all viewport sizes.
    
*  Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
* Are application elements visible and usable in all viewports
    * On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

# Install:
download all the files contained within `mws-restaurant-stage-1` folder
with all subfolders `css`, `img`, `js` and `index.html`.
# !! Note !!
This Method should be like this:
	To make the application run locally: in file `dbhelper.js`
	`static imageUrlForRestaurant(restaurant) {
    return (`/img/${restaurant.photograph}`);`
  } 

# Run the project:
In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

With your server running, visit the site: http://localhost:8000, and here you go :) 
[mws-restaurant-stage-1]


# Why This Project?
_All content-related images include appropriate alternate text that clearly describes the content of the image.
Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access._


# About
_**Eman Zaghloul**_ a software engineer who used to work as C# .Net developer for many year.And has passion and desire to learn and build beautiful web sites.
after graduation from **FEND Nano Degree.**  


