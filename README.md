# Matcha
  A dating Platform - 1337 school (42 network) project.

# Description
  A web app that allows registred users to interact with each other.
  The user can create his account, and after completing his profile he can search for other users by age, distance, rating and common tags.
  With the possibility to like, block or report fake accounts. Two matched users can chat with each other.

# Features
  * Like/unlike, block and report users.
  * Search and filter users.
  * Realtime chat with matched users.
  * Realtime notifications when: a like is received, the user is matched with another one, the users's profile is viewed, a message is received, a matched user unliked.

# Front-end
  * React.js (+hooks)
  * Redux (+ Redux form, Redux-saga)
  * Material-ui

# Back-end
  * Node.js
  * Express.js
  * Socket.io
  * MYSQL

# Prerequisites
  node, npm

# Running the app
```
cd client && npm install
cd server && npm install
cd server/database && and sh index.sh #to launch db migration with 500+ users
cd server && npm run devStart
cd client && serve -s build -l [PORT]
```

# Screenshots
## Login Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 31 01 PM" src="https://user-images.githubusercontent.com/44867969/112869787-72891980-90b5-11eb-998d-f0c754a0b89c.png">

## Register Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 31 19 PM" src="https://user-images.githubusercontent.com/44867969/112869798-76b53700-90b5-11eb-994b-81f64f1e35a4.png">

## Forgot Password Page
<img width="2560" alt="Screen Shot 2021-03-29 at 12 31 43 PM" src="https://user-images.githubusercontent.com/44867969/112869828-7ddc4500-90b5-11eb-9dce-92ce650cc89b.png">

## complete infos pages
 ### personal infos
 <img width="2560" alt="Screen Shot 2021-03-31 at 2 22 43 PM" src="https://user-images.githubusercontent.com/58786816/113421703-770a4680-93c3-11eb-8dda-4c58ac8730f2.png">
 ### photos
 <img width="2560" alt="photos" src="https://user-images.githubusercontent.com/58786816/113421859-acaf2f80-93c3-11eb-8abd-eef31e23d15a.png">
 ### location
 <img width="2560" alt="Screen Shot 2021-03-29 at 12 35 28 PM" src="https://user-images.githubusercontent.com/44867969/112870030-ae23e380-90b5-11eb-9304-c7f6b8261d2a.png">
 
 ## Browsing page
<img width="2546" alt="browse" src="https://user-images.githubusercontent.com/58786816/113422355-71f9c700-93c4-11eb-85dd-b5640922206a.png">

 ## Profile
 <img width="2546" alt="profile" src="https://user-images.githubusercontent.com/58786816/113422558-d3219a80-93c4-11eb-8fab-0ebf682b8c9c.png">
 
 ## View Others users profile
<img width="2560" alt="Screen Shot 2021-03-29 at 12 56 03 PM" src="https://user-images.githubusercontent.com/44867969/112870470-27bbd180-90b6-11eb-8de9-3ef8e6cb568a.png">

 ## Activity Page
<img width="2544" alt="Screen Shot 2021-03-29 at 12 57 59 PM" src="https://user-images.githubusercontent.com/44867969/112870476-29859500-90b6-11eb-875c-60e7df174a36.png">
