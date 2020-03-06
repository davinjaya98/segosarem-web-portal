# How to start a gulp project -- This is frontend for AEM project

1. npm install --global gulp-cli -> To install gulp cli or command line to project if you don't have it on your machine

2. modify the package.json as you need

3. npm install --start-dev gulp -> To install gulp to the project

4. gulp webserver - To run the server on port 8080

5. gulp build - To only build the sources without running it on server (Server is hot reload)

6. Please update the gulpfile.js when it is necessary.

7. To add library, please either use (NPM install and add it manually to gulpfile.js) OR (download manually and include it to assets path and add it manually to gulpfile.js)

## Project Structure

- app
  - js
  - pages
    - sample
  - scss
- dist
  - pages
    - sample
  - index.html
  - index.js
  - script.js
  - style.css
- gulpfile.js
- index.html
- index.js
- package.json
- README.md
