//! option A
export abstract class Vehicle {
	abstract getNumberOfSeats(): number
}

export class Tesla extends Vehicle {
	constructor(private _numberOfSeats: number) {
		super()
	}

	getNumberOfSeats = (): number => this._numberOfSeats
}

export class Audi extends Vehicle {
	constructor(private _numberOfSeats: number) {
		super()
	}

	getNumberOfSeats = (): number => this._numberOfSeats
}

export class Toyota extends Vehicle {
	constructor(private _numberOfSeats: number) {
		super()
	}

	getNumberOfSeats = (): number => this._numberOfSeats
}

export class Honda extends Vehicle {
	constructor(private _numberOfSeats: number) {
		super()
	}

	getNumberOfSeats = (): number => this._numberOfSeats
}

export class Yaris extends Vehicle {
	constructor(private _numberOfSeats: number) {
		super()
	}

	getNumberOfSeats = (): number => this._numberOfSeats
}

//! option B

// export abstract class Vehicle {
// 	constructor(private _numberOfSeats: number) {}

// 	getNumberOfSeats(): number {
// 		return this._numberOfSeats
// 	}
// }

// export class Tesla extends Vehicle {
// 	constructor(numberOfSeats: number) {
// 		super(numberOfSeats)
// 	}
// }

// export class Audi extends Vehicle {
// 	constructor(numberOfSeats: number) {
// 		super(numberOfSeats)
// 	}
// }

// export class Toyota extends Vehicle {
// 	constructor(numberOfSeats: number) {
// 		super(numberOfSeats)
// 	}
// }

// export class Honda extends Vehicle {
// 	constructor(numberOfSeats: number) {
// 		super(numberOfSeats)
// 	}
// }
