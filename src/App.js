import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchStuff from './scripts';


let maxSearchesFor1minute = 30;
let searches = 0;

class Searchinput extends React.Component {


  onChange() {
    let myPromise = new Promise((resolve, reject) => {
      if( searches < maxSearchesFor1minute ){
        SearchStuff.searchFun(this.myInput.value);
        searches++;
        setTimeout( function() {
          resolve();
        }, 60000);
      }
      else {
        console.warn("To much search requests, slow down please");
      }
    }) 
    
    myPromise.then(() => {
      searches = 0;
      console.log("You can search again now") 
    });


  }

  render() {
    return (
      <div className={this.props.classname} >
        <input
          ref={input => {
            this.myInput = input;
          }}
          onChange={this.onChange.bind(this)}
          placeholder={this.props.placeholderText}
        />
      </div>
    );
  }
}


class SearchOnPage extends React.Component {


  onChange() {
    let elementsToSearch = document.getElementsByClassName("");

    let inputValue = this.myInput.value;
    document.querySelectorAll('.search-word-here').forEach(function(e) {
      
      // console.log(e);
      e.innerHTML = e.text.replace(inputValue, "<span class='marked-text'>" + inputValue + "</span>");
      
    });

  }

  render() {
    return (
      <div className={this.props.classname} >
        <input
          ref={input => {
            this.myInput = input;
          }}
          onChange={this.onChange.bind(this)}
          placeholder={this.props.placeholderText}
        />
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search articles from Wikipedia!
        </p>

        <Searchinput classname="text-input-parent" placeholderText="Search on Wikipedia" />
        <SearchOnPage classname="text-search-parent" placeholderText="Search on this page" />


        <div id="search-results"></div>
      </header>
    </div>
  );
}


export default App;
