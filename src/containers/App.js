import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCharacters } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import logo from '../logo.svg';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCharacters.searchField,
    characters: state.requestCharacters.characters,
    isPending: state.requestCharacters.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCharacters: () => dispatch(requestCharacters())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestCharacters();
  }

  render() {
    const { characters, searchField, onSearchChange, isPending } = this.props;
    let values = [];
    Object.entries(characters).forEach(entry => {
        values = entry[1];
        console.log(values);
    })
    const filteredCharacters = values.filter(character => {
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='Header-title'>Search Marvel Characters</h1>
        <img src={logo} className="MarvelBrand-logo" alt="Marvel logo" />
        <small>Data provided by Marvel. © 2019 MARVEL</small>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList characters={filteredCharacters}/>
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)