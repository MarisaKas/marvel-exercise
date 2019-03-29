import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestCharacters = () => (dispatch) => {
  dispatch({ type: REQUEST_CHARACTERS_PENDING })
  apiCall('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=74326fe3651948b7beb4297141fb7f8b&hash=b2c2ba442577fa713563d7c3adf0125b')
    .then(data => dispatch({ type: REQUEST_CHARACTERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CHARACTERS_FAILED, payload: error }))
}