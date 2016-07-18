import Elm from 'react-elm-components'
import React, { Component } from 'react'
import $ from 'jquery'
import { render } from 'react-dom'
import Snippets from 'Snippets/Main.elm'

import Slider from 'Slider/index.jsx'

class App extends Component {
  render() {
	  return (
	      <div>
	      <Elm src={Snippets.Main} />
	      <Slider />
	      </div>
	  )
  }
}

render(
    <App />,
  document.getElementById('main')
)

import greet from './test.ts'

console.log(greet('111'))

/**
   ___browserSync___.socket.emit('test', 2333)

   var ws = new WebSocket('ws://localhost:9999')
   ws.send('233')
*/
