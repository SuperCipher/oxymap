# Open source Nonprofit oxygen supplier maps website

## Goal

Curate a list of oxygen supplier and present them in an easy to choose, locate and navigate on a map.

## MVP check list

- [x] Aggregates all the supplier information
- [x] Add "View place on google map" link to maker accessibility

## Production check list

- [ ] add Term Of Use
- [ ] add Contact
- [ ] Open graph API

## Contribution guidelines

[Commit convention](https://gist.github.com/SuperCipher/f604668821f84663765491f6ece61370)


## Setup

```sh
npm i
npm start  # development
npm run build  # production
```

The application is currently using the `.env` file to embed the API key in the
HTML document. This is a temporary key and is not valid for production usage. It
can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).
Or contact me to get a dev environment key.

## Feedback

For feedback related to this sample, please open a new issue on
[GitHub](https://github.com/SuperCipher/oxymap).
