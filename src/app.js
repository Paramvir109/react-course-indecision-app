//JSX - Javascript XML
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch(it will watch for changes)

//We can write jsx in {} as well
//boolean,undefined,null are ignored by jsx {true}, {null} etc
//(true && 'abc') Here abc is returned but (false && 'abc') false is returned
//This is not usually understood by the browser that's why we use babel to convert it into normal es5 javascript
//See changes in public/scripts/app.js
const app = {
    title : 'Indecision App',
    subtitle : 'Subtitle',
    options: ['One', 'Two'],
    location : 'New Delhi'

}
let getLocation = (location) => {
    if(location) {
        return  <p>Location : {location}</p>
    }
}
const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {getLocation(app.location)} 
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <form>
            
        </form>
    </div>
);
//template is converted to an js object by babel
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
