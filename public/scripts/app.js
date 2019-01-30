'use strict';

//JSX - Javascript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch(it will watch for changes)

/*We can write jsx in {} as well
boolean,undefined,null are ignored by jsx {true}, {null} etc
(true && 'abc') Here abc is returned but (false && 'abc') false is returned
jsx doesn't support arrays but it does support arrays
{[1,2]} is treated as {1}{2}
 numbers.map((number,index) => <p key={index}>Number : {number}</p>) This will return array to {} jsx expression
We can use dom elements inside arrays in jsx but we do need to specify key for each of them
This is not usually understood by the browser that's why we use babel to convert it into normal es5 javascript
See changes in public/scripts/app.js */
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of your computer',
    options: [],
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
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    //e.target -->form .elements ->(Array of children nodes with value as of name attribute) 
    var option = e.target.elements.option.value;
    if (option) {
        //If not empty
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};
var clearOptions = function clearOptions() {
    app.options = [];
    renderTemplate();
};
var numbers = [55, 101, 1000];
var appRoot = document.getElementById('app');
var renderTemplate = function renderTemplate() {
    //template is converted to an js object by babel

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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option : ',
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Remove all'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderTemplate();
