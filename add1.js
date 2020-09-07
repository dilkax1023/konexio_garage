const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// DEFINE THE SCHEMA
const carSchema = new mongoose.Schema({
	brand: String,
	model: String,
	year: Number,
	date: {
		type: Date,
		default: Date.now,
	},
});

// DEFINE THE MODEL
const Car = mongoose.model('Car', carSchema);

const arr = [
	// { brand: 'Renaul', model: 'Espase', year: 1999 },
	{ brand: 'Renaul', model: 'Scenic', year: 2004 },
	// { brand: 'Peogeot', model: '308', year: 2017 },
];

// INSERT ALL THE DOCS AT ONCE
Car.insertMany(arr, function (err, cars) {
	if (err) {
		console.log('something went wrong', err);
	} else {
		console.log(cars);
	}
});
