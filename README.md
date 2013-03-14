# EdgePlate

Application Boilerplate for Edge Front End Projects

## EdgePlate Project Structure
 
- `dist` *directory dedicated to storing the distributed version of application*
- `src` *all application, server, grunt tasks and web services source*
    - `src/app` *application source*
        - `src/app/images` *application images*
        - `src/app/lib` *bower managed dependencies*
        - `src/app/scripts` *application javascript*
            - `src/app/scripts/controllers` *angularjs controllers*
            - `src/app/scripts/directives` *angularjs directives*
            - `src/app/scripts/filters` *angularjs filters*
            - `src/app/scripts/services` *angularjs services*
            - **`src/app/scripts/app.js`** *pimary javascript*
        - `src/app/styles` *application scss and css*
            - `src/app/styles/directive` *scss for directive templates*
            - `src/app/styles/fonts` *local font dependencies*
            - `src/app/styles/images` *css image dependencies*
            - `src/app/styles/layout` *scss for base layout templates*
            - `src/app/styles/layout` *scss for page templates*
            - `src/app/styles/tmpl` *scss for misc partial templates*
            - **`src/app/styles/_mixins.scss`** *local mixins*
            - **`src/app/styles/_styles.scss`** *global styles*
            - **`src/app/styles/_variables.scss`** *bootstrap variable overrides*
            - **`src/app/styles/app.scss`** *main stylesheet which brings in all style dependencies*
        - `src/app/views` *angularjs view and jade templates*
            - `src/app/views/directive` *angularjs directive templates*
            - `src/app/views/layout` *base layout templates*
            - `src/app/views/page` *page templates*
            - `src/app/views/tmpl` *misc partial templates*
        - **`src/app/.bowerrc`** *bower component configuration*
        - **`src/app/component.json`** *bower component configuration*
        - **`src/app/index.jade`** *application index file*
    - `src/grunt-tasks` *custom grunt tasks*
    - `src/server` *express server configuration*
        - `src/server/routes` *application routes*
            - **`src/server/routes/index.js`** *main routes*
        - **`src/server/common.js`** *common express configuration used by both grunt and standalone*
        - **`src/server/grunt.js`** *grunt specific express configuration*
        - **`src/server/grunt.js`** *standalone specific express configuration*
    - `src/services` *node services available to application*
- `test` *end-to-end and unit tests*
- **`.editorconfig`** *editorconfig settings*
- **`.jshintrc`** *jshint settings*
- **`Gruntfile.js`** *grunt configurations*
- **`package.json`** *npm application and development dependencies*
- **`README.md`** *overly complex file detailing project, see self*

### Local Structure Not Part of Git Repository

- `.tmp` *used to store files temporarily during server and build tasks*
- `.sass-cache` *used by compass task*
- `node_modules` *home of all npm dependencies in* **`package.json`**

## TODO

### Project Templates
- [ ] app.js and related angularjs javascript setup
- [ ] index.jade and related templates
- [ ] express server configuration
- [ ] application routes

### Grunt Tasks
- [ ] custom grunt server task(s)
- [ ] custom grunt build task(s)
- [ ] watch task config
- [ ] open task config
- [ ] clean task config
- [ ] mocha task config
- [ ] coffee task config
- [ ] uglify task config
- [ ] useminPrepare task config
- [ ] usemin task config
- [ ] imagemin task config
- [ ] cssmin task config
- [ ] htmlmin||ngmin task config
- [ ] jade task config
- [ ] copy task config
