This app is supposed to show how to write a cypress test that will programmatically login a user into Auth0.

Warning if you clone this repo it isn't going to work "as-is" you will have to add auth_config.json in the src folder and put this:
    {
        "domain": "auth0domain",
        "clientId": "auth0clientId"
    }

Replace "auth0domain" and "auth0clientId" with the domain and clientId of your own Auth0 app. Obviously this needs to be kept secret that's why my .gitignore has

    src/auth_config.json

in it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

