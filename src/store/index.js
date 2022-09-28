import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    data: [],
    column: '',
    condition: '',
    text: ''
  },

  getters: {
    DATA(state){
      return state.data
    },
    column(state){
      return state.column
    },
    condition(state){
      return state.condition
    },
    text(state){
      return state.text
    }

  },

  mutations: {
    SET_DATA(state, data){
      state.data = data
    },
    SET_FILTERED_DATA(state, value){
      let {column, condition, text} = value;
      state.column = column;
      state.condition = condition;
      state.text = text;

      if(column === 'Date' && condition === '>'){
        return state.data = state.data.filter(el => el.birthDate > text)
      }
      if(column === 'Date' && condition === '<'){
        return  state.data = state.data.filter(el => el.birthDate < text)
       }
       if(column === 'Date' && condition === '='){
        return  state.data = state.data.filter(el => el.birthDate === text)
       }
      if(column === 'Name'){
        return  state.data = state.data.filter(el => el.lastName.toLowerCase().includes(text.toLowerCase()))
      }
      if(column === 'Amount' && condition === '='){
        return  state.data = state.data.filter(el => el.height === text)
      }
      if(column === 'Amount' && condition === '>'){
        return  state.data = state.data.filter(el => el.height > text)
      }
      if(column === 'Amount' && condition === '<'){
        return  state.data = state.data.filter(el => el.height < text)
      }
      if(column === 'Distance' && condition === '<'){
        return  state.data = state.data.filter(el => el.weight < text)
      }
      if(column === 'Distance' && condition === '>'){
        return  state.data = state.data.filter(el => el.weight > text)
      }
      if(column === 'Distance' && condition === '='){
        return  state.data = state.data.filter(el => el.weight === text)
      }
   
    }
  },

  actions: {
    GET_DATA_FROM_API({commit}){
      return axios('https://dummyjson.com/users', {
        method: 'GET'
      })
      .then((response) => {
        console.log(response)
        commit('SET_DATA', response.data.users)
      })
    },
    GET_FILTERED_DATA({commit}, value){
      commit('SET_FILTERED_DATA', value)
    }
  },

  modules: {
  }

})
