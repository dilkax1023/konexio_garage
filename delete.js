const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
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

Car.deleteMany({ brand: 'Renaul' }, (err, res) => {
	if (!err) {
		console.log(res);
	}
});

Car.find((err, cars) => {
	if (!err) {
		console.log(cars);
	}
});
