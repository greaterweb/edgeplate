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
