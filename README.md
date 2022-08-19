# Boba Buddy API

This API was designed to be used with the [Boba Buddy application](https://github.com/kpn678/boba-buddy). It is also currently deployed on [Heroku](https://dnvr-boba-buddy-api.herokuapp.com/).

## Set-Up
1. Clone down this repo and `cd` into the directory.
2. Run `npm i` to install dependencies.
3. Run `node server.js` to run the API locally.
4. Navigate to http://localhost:3001/ in your browser to view API.

## Endpoints

| Method | Endpoint | Request Body | Sample Response |
--- | --- | --- | ---
`GET` | `'/'` | n/a | `[{"id": 1, "name": "Sharetea Belmar", "region": "West", "address": "424 S Teller St, Lakewood, CO 80226", "yelp": "https://www.yelp.com/biz/sharetea-lakewood-lakewood", "facebook": "https://www.facebook.com/shareteabelmar", "instagram": "https://www.instagram.com/shareteabelmar/", "website": "https://www.1992sharetea.com/"}, ...]`
