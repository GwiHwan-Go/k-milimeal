#Instaclone

#Set up
mkdir -> mk git repository and add -> npm init -y -> code .
git config --global core.autocrlf true
npm install -g touch-for-windows --> touch RADME.md

npm i apollo-server graphql
package.json -> "scripts > dev " > npm run dev
npm i nodemon --save-dev

npm install --save-dev @babel/core
npm install @babel/preset-env --save-dev
touch babel.config.json 
"dev": "nodemon --exec babel-node server"
npm i @babel/node --save-dev

stack_builder => install postgres, pgadmin4, username should be same with .env, mydb should be changed
after open the pgadmin4, npx prisma migrate dev

npm i graphql-tools
npm i dotenv

npm i bcrypt
npx prisma studio

---> simulation ended


Instaclone Backend

##User: npx prisma init -> make model on prisma schema and migrate -> make queries and mutations and it should be matched with schema.prisma

- Create Account
- See profile
- Login - npm install jsonwebtoken
- Edit Profile
- Change Avatar - altair graph ql, npm i express apollo-server-express,
npm i morgan

-upload photo - npm i aws-sdk


####instaclone FrontEnd

npx create-react-app instaclone-web