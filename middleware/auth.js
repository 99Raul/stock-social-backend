import jwt from 'jsonwebtoken';

// if user want to like a post
// click the like button => auth middleware (confirms or denies request/ next() ) => like controller

//const secret = 'test'

const auth = async (req, res, next) => {
	try {
		//console.log(req.headers)
		const token = req.headers.authorization.split(' ')[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, 'secret_string');

			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);

			req.userId = decodedData?.sub;
		}

		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
