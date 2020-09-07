const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	// we're connected!
	console.log('we are connected');
});

const carSchema = new mongoose.Schema({
	brand: String,
	model: String,
	year: Number,
	date: {
		type: Date,
		default: Date.now,
	},
});

const Car = mongoose.model('Car', carSchema);

Car.findById('5f51d8bd80628335ffcf329e', (err, car) => {
	if (err) {
		console.log('something went wrong', err);
	} else {
		console.log('the car with this id is', car);
	}
});
