const HEADER = {
	"Content-Type": "application/json",
	Accept: "application/json",
	Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
};

const URL_API = "https://coding-challenge-api.aerolab.co";

// ? get user parameters of the API
export const getUser = async () => {
	try {
		const options = {
			method: "GET",
			headers: HEADER
		};

		const response = await fetch(`${URL_API}/user/me`, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// ? addPoints
export const postPoints = async (points) => {
	try {
		const options = {
			method: "POST",
			body: JSON.stringify({ amount: points }),
			headers: HEADER
		};

		const response = await fetch(`${URL_API}/user/points`, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// ? get products of the API
export const getProducts = async () => {
	try {
		const options = {
			method: "GET",
			headers: HEADER
		};

		const response = await fetch(`${URL_API}/products`, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// ? buy products
export const postRedeem = async (productId) => {
	try {
		const options = {
			method: "POST",
			body: JSON.stringify({ productId }),
			headers: HEADER
		};

		const response = await fetch(`${URL_API}/redeem`, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

// ? get product history
export const getProductsHistory = async () => {
	try {
		const options = {
			method: "GET",
			headers: HEADER
		};

		const response = await fetch(`${URL_API}/user/history`, options);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};
