class AuthController {
	async registration(req, res) {
		try {

		} catch (err) {
			console.error(err.message);
		}
	}

	async login(req, res) {
		try {

		} catch (err) {
			console.error(err.message);
		}
	}

	async getUsers(req, res) {
		try {
			res.json('serv works')
		} catch (err) {
			console.error(err.message);
		}
	}
}

module.exports = new AuthController();