module.exports = {
		attributes: {
			type: {
				type: 'string',
				index: true
			},
			owner: {
				model:'User'
			},
			from: {
				model:'User'
			},
			text: 'string',
			reference: 'string',
			name: 'string',
			status: 'string'
		},

};