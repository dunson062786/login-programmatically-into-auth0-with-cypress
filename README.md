This app is supposed to show how to write a cypress test that will programmatically login a user into Auth0.

Warning if you clone this repo it isn't going to work "as-is" you will have to add auth_config.json in the src folder and put this:

    {
        "domain": "my_tenant.auth0.com",
        "clientId": "my_client_id"
    }


Replace "my_tenant.auth0.com" and "my_client_id" with your own Auth0 domain and clientId.

Also create a cypress.env.json folder in your root directory and put this:

    {
        "auth_audience": "https://my_tenant.auth0.com/api/v2/",
        "auth_url": "https://my_tenant.auth0.com/oauth/token",
        "auth_client_id": "my_client_id",
        "auth_client_secret": "my_client_secret",
        "auth_username": "my_username",
        "auth_password": "my_password"
    }

You will have to update each one of the properties above with your own Auth0 values:

* auth_audience: For this one, you will have to replace my_tenant.auth0.com with your own Auth0 domain (e.g. blog-samples.auth0.com).You can find this information on Auth0 application you created before.
* auth_url: Here, you will have to do the same thing. You will have to replace my_tenant.auth0.com with your own Auth0 domain.
* auth_client_id: In this case, you will have to use the Client ID property of the Auth0 Application you created before.
* auth_client_secret: You will have to use the Client Secret property of the Auth0 Application you created.
* auth_username: The user cypress will be logging in programmatically with in your tests.
* auth_password: The password of the user who cypress will be loggin in programmatically with in your tests.

 Obviously the contents of both these files needs to be kept secret that's why my .gitignore has

    src/auth_config.json
    
    cypress.env.json

in it.

Also make sure to do the Auth0 Setup & Configuration steps outlined in (https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/)

## Available Scripts

In the project directory, you can run:

### `npm start`

    npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run cypress:open`

    npm run cypress:open

Runs cypress tests

