import { Tesla, Audi, Toyota, Honda, Vehicle } from "./03-liskov-c"
;(() => {

	const printCarSeats = (cars: Array<Vehicle>) => {
		cars.forEach((car) => console.log(`Car: ${car.constructor.name}`,'Seats: '+car.getNumberOfSeats()))
	}

	const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)]

	printCarSeats(cars)
})()
