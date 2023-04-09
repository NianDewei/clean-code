;(() => {
	// Resolver sin la triple condicional dentro del if
	// includes? arrays?
	function isRedFruit(fruit: string): boolean {
		//?option 01
		// const ifIsAnFruit =
		// 	fruit === "manzana" || fruit === "cereza" || fruit === "ciruela"
		// return ifIsAnFruit ? true : false

		//?option 02
		const fruitNames: Array<string> = ["manzana", "cereza", "ciruela"]
		return fruitNames.includes(fruit)
	}

	// Simplificar esta función
	// switch? Object literal? validar posibles colores
	interface ColorByFruits {
		[index: string]: Array<string>
		red: Array<string>
		yellow: Array<string>
		purple: Array<string>
	}

	function getFruitsByColor(color: string): Array<string> {
		const fruits: ColorByFruits = {
			red: ["manzana", "fresa"],
			yellow: ["piña", "banana"],
			purple: ["moras", "uvas"]
		}

		const hasFruits = fruits[color]
		if (hasFruits) return hasFruits

		throw Error("the color must be: red, yellow, purple")
	}

	interface Steps {
		name: string
		status: boolean
	}

	const stepsWorking: Array<Steps> = [
		{ status: false, name: "First" },
		{ status: true, name: "Second" },
		{ status: true, name: "Third" },
		{ status: true, name: "Four" }
	]

	function workingSteps() {
		const allStepsCompleted = stepsWorking.every(({ status }) => status)
		const stepsBroken = stepsWorking.filter(({ status }) => !status)
		const lastStepBroken = stepsBroken.slice(-1)[0]

		if (allStepsCompleted) return "Working properly!"
		if (stepsBroken.length === 1) return `${stepsBroken[0].name} step broken.`

		return `Broke from the pass ${stepsBroken[0].name} to ${lastStepBroken.name}`
	}

	// isRedFruit
	console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }) // true
	console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }) // false

	//getFruitsByColor
	console.log({ redFruits: getFruitsByColor("red") }) // ['manzana', 'fresa']
	console.log({ yellowFruits: getFruitsByColor("yellow") }) // ['piña', 'banana']
	console.log({ purpleFruits: getFruitsByColor("purple") }) // ['moras', 'uvas']
	// console.log({ pinkFruits: getFruitsByColor("pink") }) // Error: the color must be: red, yellow, purple

	// workingSteps
	console.log({ workingSteps: workingSteps() }) // Cambiar los valores de la línea 31 y esperar los resultados
})()
