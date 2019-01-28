# [TIMER APP By Walid Braham] - www.wbraham.me

![alt text](http://wbraham.me/assets/img/screenshot1.jpg "TIMER APP")
![alt text](http://wbraham.me/assets/img/screenshot2.jpg "TIMER APP")


This is simple time tracking application, users can start a tracker that counts the spent time working on a task, they can play, pause, resume and stop the timer, and then take a look at all the tasks accomplished in details.
This is a MEAN Stack app:
A MongoDB database, Loopback which is an ExpressJS framework and uses the Swagger API, Angular 6 for the frontend and NodeJS for the server side.
My choice quickly went for the NodeJS framework because it's so fast, easily integrated into an app, makes real-time web applications a real pleasure without forgetting the big and nice community behind it.
As for the improvements and maybe upcoming features, I think we could have added some stats/achievements to boost creativity, sharing stats/achievements with friends, notifications, a pomodoro mode, possibility to remove and edit existing tasks and why not a mobile app or a browser extension.

## Links:

+ [Github Repository](https://github.com/wbraham/Timer)
+ [My Portfolio](http://www.wbraham.me)

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org).
2. Install MongoDB from [MongoDB Official Page](https://www.mongodb.com/download-center/v2/community).
3. Clone or download project.
4. Open Terminal
5. Go to the project folder.
6. Make sure you have already installed [Angular CLI](https://github.com/angular/angular-cli).
7. Run in terminal: `npm install` to install al the npm packages.
8. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
9. Run in another terminal window: `sudo service mongod start` to launch MongoDB.
10. One last step, run in another terminal window: `node .` to start your Node server.

I have exported my database, you could import it running this command :
`mongoimport --db demo --collection task --file database.json`
