;(() => {
	interface Product {
		id: number
		name: string
	}

	// Usually, this is a class to control the view that is displayed to the user
	// Remember that we can have many views that do this same job.
	class ProductBloc {
		loadProduct(id: number) {
			// Perform a process to obtain the product and return it
			console.log("Producto: ", { id, name: "OLED Tv" })
		}

		saveProduct(product: Product) {
			// Make a request to save to database
			console.log("Guardando en base de datos", product)
		}

		notifyClients() {
			console.log("Enviando correo a los clientes")
		}

		onAddToCart(productId: number) {
			// Add to shopping cart
			console.log("Agregando al carrito ", productId)
		}
	}

	const productBloc = new ProductBloc()

	productBloc.loadProduct(10)
	productBloc.saveProduct({ id: 10, name: "OLED TV" })
	productBloc.notifyClients()
	productBloc.onAddToCart(10)
})()
