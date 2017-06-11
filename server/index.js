const express = require('express');
const app = express();

app.get('/api', function(req, res) {
	const persons = [
		{
			name: 'Anoop'
		},
		{
			name: 'Mundathan'
		}
	];
	res.send(persons);
});

var port = process.env.PORT || 3001;
app.listen(port, function() {
	console.log(`Server running at port ${port}`);
});