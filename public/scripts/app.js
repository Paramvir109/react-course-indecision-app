'use strict';

//JSX - Javascript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch(it will watch for changes)

//We can write jsx in {} as well
//boolean,undefined,null are ignored by jsx {true}, {null} etc
//(true && 'abc') Here abc is returned but (false && 'abc') false is returned
//This is not usually understood by the browser that's why we use babel to convert it into normal es5 javascript
//See changes in public/scripts/app.js
var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: ['One', 'Two'],
    location: 'New Delhi'

};
var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    getLocation(app.location),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    ),
    React.createElement('form', null)
);
//template is converted to an js object by babel
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
