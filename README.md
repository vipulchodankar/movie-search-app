# movie-search-app
A simple movie search app.
The app is still under development.


# Dependencies: 
The app uses nodejs and npm, hence both should be installed. Go to [npmjs,org](npmjs.org) for more details 
To install other app dependencies simply run 
```
npm install
```
in the same directory as the app.js file

# Obtaining Api Keys:
To obtain api keys go to [omdbapi.com](https://omdbapi.com) and click on api keys.
Fill in relevent details and click submit.
A link for the api key will be mailed to you.
activate the api key and create a new file called '.env' in the folder containing app.js
add the following content to it and save  
```
api_key=YOUR_API_KEY
```
# Running the app:
To run the app simple use the command
```
npm start app.js
```
and it will return the port at which the webiste will be available. Simply copy paste it into your browser and you have the app.

