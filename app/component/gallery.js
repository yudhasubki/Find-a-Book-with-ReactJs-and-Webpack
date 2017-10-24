import React , { Component } from 'react';

class Gallery extends Component{
	render() {
		return (
			<div>
				{
					this.props.items.map((item, index) => {
						let {title, imageLinks, infoLink} = item.volumeInfo;
						return(
							<div key={index}>
								<img src={imageLinks !== undefined ? imageLinks.thumbnail : ''} />
								{title}
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Gallery;
