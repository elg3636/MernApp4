Installation instructions:
Setting up the backend:
1) Download the code to the root directory that you want and install all code from the backend and frontend repositpories.
2) Set up backend
   a) install Node js to your computer. This can be done through this link: https://nodejs.org/en/download
   b) Navigate to your backend folder and install the dependencies using the commands
       cd projectName backend
       npm install
   c) run the command npm install mongodb in your terminal
   d)Create a MongoDB cloud atlas database. Create an account and a new cluster following this link:
   https://account.mongodb.com/account/login?n=%2Fv2%2F653aa59ca9b4454e4a4d2fcc&nextHash=%23metrics%2FreplicaSet%2F653aa64db1eac81e7abd1638%2Fexplorer%2Ftest%2Fquestions%2Ffind

   Once the cluster has been created, press connect and then connect to your application and copy the code provided

   e) Once you have created a new cluster, create a .env file in the backend folder and paste the code copied in the previous step.
   It should look like the following. 

   ATLAS_URI = mongodb+srv://egustavsson94:<password>@cluster0.t5bzsx1.mongodb.net/?retryWrites=true&w=majority

   Make sure to change the password to the password you set when starting the cluster.

Setting up the frontend: 
1) Navigate to your front end folder:
   cd projectName frontend
   npm install
   npm start
   
2) Initialize the react app and install the other libraries you need by using the command:
   npx create-react-app
   npm i react-redux react-router-dom axios


       



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# MernAppProjectFinal
