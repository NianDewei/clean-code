;(() => {
	interface Product {
		id: number
		name: string
	}

	// ? part > 01
	class ProductService {
		getProduct(id: number) {
			console.log("Producto: ", { id, name: "OLED Tv" })
		}

		saveProduct(product: Product) {
			console.log("Guardando en base de datos", product)
		}
	}

	class CartBloc {
		onAddToCart(productId: number) {
			// Add to shopping cart
			console.log("Agregando al carrito ", productId)
		}
	}

	class Mailer {
		private _masterEmail: string = "rolando.oc@devbyte.com"

		sendEmail({
			emailList,
			template
		}: {
			emailList: Array<string>
			template: "to-clients" | "to-admins"
		}): void {
			console.log(
				"enviando correo a los clientes",
				"From: " + this._masterEmail,
				template + ": ",
				emailList
			)
		}
	}

	// Usually, this is a class to control the view that is displayed to the user
	// Remember that we can have many views that do this same job.
	class ProductBloc {
		private _productService: ProductService
		private _mailer: Mailer

		constructor(productService: ProductService, mailer: Mailer) {
			this._productService = productService
			this._mailer = mailer
		}

		loadProduct(id: number) {
			// Perform a process to obtain the product and return it
			this._productService.getProduct(id)
		}

		saveProduct(product: Product) {
			// Make a request to save to database
			this._productService.saveProduct(product)
		}

		notifyClients() {
			this._mailer.sendEmail({
				emailList: ["rolandowc@gmail.com"],
				template: "to-clients"
			})
		}
	}

	const productService = new ProductService()
	const mailer = new Mailer()

	const productBloc = new ProductBloc(productService, mailer)
	const cartBloc = new CartBloc()

	productBloc.loadProduct(10)
	productBloc.saveProduct({ id: 10, name: "OLED TV" })
	productBloc.notifyClients()
	cartBloc.onAddToCart(10)
})()
