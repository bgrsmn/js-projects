//crosscuttingconcerns gibi dosya görürsek bu loglama gibi şeyler içindir.
export class BaseLogger {
	log(data) {
		console.log('Default logger: ' + data);
	}
}

export class ElasticLogger extends BaseLogger {
	log(data) {
		console.log('Logged to Elastic' + data);
	}
}

export class MongoLogger extends BaseLogger {
	log(data) {
		console.log('Logged to Mongo' + data);
	}
}
