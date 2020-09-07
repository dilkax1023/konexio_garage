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

Car.updateOne({ model: 'Espase' }, { $set: { year: 2000 } }, (err, res) => {
	if (!err) {
		console.log(res);
	}
});

Car.find({ brand: 'Espase' });
