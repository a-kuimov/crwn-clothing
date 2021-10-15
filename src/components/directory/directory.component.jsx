import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDerectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

const Derectory = ({ sections }) => (

	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
)

const mapStateToProps = createStructuredSelector({
	sections: selectDerectorySections
})

export default connect(mapStateToProps)(Derectory)