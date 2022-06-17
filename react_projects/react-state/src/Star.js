import React from "react";


function Star(props){
	const cssStyle = {
		width: "15%",
		height :"100%"
	}
	return (
		<img 
			style={cssStyle}
			src={props.location}
		/>	
	)
}

export default Star;
