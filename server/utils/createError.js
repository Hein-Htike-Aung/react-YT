export const createError = (status, message) => {
	const error = new Error();

	error.stauts = status;
	error.message = message;

	return error;
};
