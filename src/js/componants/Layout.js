
import $ from "jquery"

import React from "react"

import Body from "./Body"

export default class Layout extends React.Component {

	constructor() {
		super()
		this.state = {
			text: 
"<h1> Hedding\n===\n\n"+
"<h2> Heading\n---\n\n"+
"### <h3> Heading\n\n"+
"Paragraphs are separated by a\nsingle blank space.\n\n"+
"Leave 2 spaces at the end of a line to do a  \nline break\n\n"+
"Text attributes *italic*, **bold**,\n"+ 
"`monospace`, ~~strikethrough~~.\n\n"+
"Unordered list:\n"+
"  * apples\n"+
"  * oranges\n"+
"  * pears\n\n"+
"Ordered list:\n"+
"  1. apples\n"+
"  2. oranges\n"+
"  3. pears\n\n"+
"The rain--not the reign---in\n"+
"Spain.\n\n"+
"*[Carl Callmer](https://github.com/CarlCal)*"
		}
	}

	changeText(text) {

		$(document).keypress(function(e) {
			if(e.which == 13) {
				text = "<br><br>"
			}
		})

		this.setState({text})
	}

	render() {
    return (
    	<div>
	      <Body changeText={this.changeText.bind(this)} text={this.state.text} />
      </div>
    )
  }
}

