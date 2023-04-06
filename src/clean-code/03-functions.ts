;(() => {
	function getMovieBy(id: string) {
		console.log({ id })
	}

	function getMovieActorsCastBy(id: string) {
		console.log({ id })
	}

	function getAcrtorBioBy(id: string) {
		console.log({ id })
	}

	interface Movie {
		title: string
		description: string
		rating: number
		cast: Array<string>
	}

	function createMovie({ title, description, rating, cast }: Movie) {
		console.log({ title, description, rating, cast })
	}
	interface Actor {
		fullName: string
		birthdate: Date
	}

	function createActor({ fullName, birthdate }: Actor): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === "fernando") return false

		console.log("Crear actor")
		return true
	}

	// !continue:
	const getPayAmount = ({
		isDead = false,
		isSeparated = true,
		isRetired = false
	}): number => {
		// let result;
		// if ( isDead ) {
		//     result = 1500;
		// } else {
		//     if ( isSeparated ) {
		//         result = 2500;
		//     } else {
		//         if ( isRetired ) {
		//             result = 3000;
		//         } else {
		//             result = 4000;
		//         }
		//     }
		// }

		// return result;

		// ?refactored

		if (isDead) return 1500

		if (isSeparated) return 2500

		return isRetired ? 3000 : 4000
	}
})()
