
import React from "react";
import './App.css'
import { Component } from 'react';
import CardList from './Components/CardList/card_list.main'
import SearchBox from './Components/search-box/search_box.components'
class App extends Component {
  constructor(){
    super();
    this.state = {
      'friends' :[],
      'searchField' : "",
    }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then((res) =>{
      return res.json()
    }).then((data) => this.setState({
      friends : data
    }))
  }
  handlechange(e)
  {
      this.setState(
          {
          searchField : e.target.value
        }
      )
  }
  render() {
    const {friends,searchField } = this.state;
    const filtered_friends = friends.filter((friend)=>(
      friend.name.toLowerCase().includes(searchField.toLowerCase()) 
    ))
    return (
      <div className="App" >
      <h1>Monster Cards</h1>
      <SearchBox placeholder="Search the value" handlechange = {(e) => this.handlechange(e)}/>
      <CardList friends = {filtered_friends} />
      </div>
     
    );
  }
}





























// function App() {
//   const [friends, setFriends] = useState([
//     {
//       'name':'Nishant Tomar',
//       'id' : 1,
//     },
//     {
//       'name':'Saksham Mota',
//       'id' : 2,
//     },
//     {
//       'name':'Sohit Don',
//       'id' :3,
//     },
//     {
//       'name':'Taliyan',
//       'id':4,
//     }
//   ])
//   return (
//     <div className="App">
//    {
//      friends.map((friend)=>
//      (
//             <div key={friend.id}>
//             <h1>{friend.name}</h1>
//             </div>
//      ))
//    }
//     </div>
//   );
// }

export default App;
