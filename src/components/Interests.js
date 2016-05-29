import React from 'react';

export default class Interests extends React.Component {

	getInterest() {
		const interestsItem = [];
		$.each(this.props.interestsData, function(i, result) {
			interestsItem.push(<section>
													<b>爱好：{result.name}</b>
													<div className="divider"></div>
													<span>关键字：{result.keywords.join('，')}</span>
													<div className="divider"></div>
												</section>);
		})
		return interestsItem;
	}

	render() {
		return (
				<section className="interests">
					<h2><i className="fa fa-lg fa-book"></i> Intersts</h2>
					{this.getInterest()}
				</section>
			);
	}
}