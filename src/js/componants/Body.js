
import marked from "marked"
import React from "react"

export default class Body extends React.Component {
	handleChange(e) {
		var text = e.target.value
		this.props.changeText(text)
	}

	getMarkdownText() {
    var rawMarkup = marked(this.props.text, {sanitize: true})
    return { __html: rawMarkup }
  }

  render() {
    return (
    	<div class="container">
	    	<div class="rows">
	    		<div id="text-div" class="col-md-6 col-sm-12 col-xs-12">
	    			<textarea id="text-area" value={this.props.text} onChange={this.handleChange.bind(this)} />
		      </div>
		      <div class="col-md-6 col-sm-12 col-xs-12">
		      	<div id="text-prev"  dangerouslySetInnerHTML={this.getMarkdownText()}/>
	      	</div>
	      </div>
      </div>
    )
  }
}