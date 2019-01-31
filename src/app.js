const appRoot = document.getElementById('app')

class Header extends React.Component {//Here use capital first letter for class name otherwise wont render
    render() {//This method must be defined
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in hands of your computer</h2>
            </div>
        )
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <li>Option A</li>
                    <li>Option B</li>
                </ol>
            </div>
        )
    }
}
class AddOption extends React.Component {//Here use capital first letter for class name otherwise wont render
    render() {//This method must be defined
        return (
            <div>
                <form>
                    <input type="text" placeholder="Add your option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


//<Header /> That's how we write component in jsx

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
    
);

ReactDOM.render(jsx , appRoot)