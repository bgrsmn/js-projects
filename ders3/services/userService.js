//Servis method havuzu diyebiliriz.
export default class UserService {
	constructor(loggerService) {
		this.users = [];
		this.loggerService = loggerService;
	}
	add(user) {
		this.users.push(user);
		this.loggerService.log(user);
	}

	list() {
		return this.users;
	}

	getById(id) {
		//Find verdiğin şarta göre data döndürür.
		return this.users.find((u) => u.id === id);
	}
}
