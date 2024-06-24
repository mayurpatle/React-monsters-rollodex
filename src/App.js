import logo from './logo.svg';
import  React ,   {Component}  from  'react' 
import { SearchBox } from './Component/SearchBox/SearchBox.component';
import './App.css';
import { CardList } from './Component/card-list/card-list.component';

class App extends Component{
  constructor(){
    super() ; 

    this.state = {
      monsters : []   ,  
      searchField : ''  

    }

    this.handleChange  = this.handleChange.bind(this)  ; 

  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => this.setState({monsters  :  users  }))
  }
  
  handleChange  =  (e) =>  {
    this.setState({ searchField: e.target.value });   
  }

  render(){
    const  { monsters  ,  searchField}  = this.state   ; 
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())

    )
    
    return (
      <div className="App">
        <h1> Monster Rollodex</h1>
        
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}



export default App;
