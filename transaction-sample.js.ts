export type cat = "Eat out" | "Essentials" | "Entertainment" | "Fitness" | "Commute";
export type RandomData = {
	name: string;
	phone: string;
	transaction: number;
	category: cat;
	method: string;
	country: string;
	city: string;
	postalZip: string;
	date: string;
	datetime: string;
};

export const dataIter: RandomData[] = [
	{
		name: "Walmart",
		phone: "(255) 419-7678",
		transaction: 2.63,
		category: "Eat out",
		method: "Credit",
		country: "United States",
		city: "New York",
		postalZip: "89551",
		date: "2024-01-01",
		datetime: "2024-01-01T11:01:01Z"
	},
	{
		name: "Costco",
		phone: "1-332-425-7348",
		transaction: 64.17,
		category: "Entertainment",
		method: "Master Card",
		country: "United States",
		city: "San Francisco",
		postalZip: "19118",
		date: "2024-01-20",
		datetime: "2024-01-20T13:01:59Z"
	},
	{
		name: "Target",
		phone: "1-382-527-6045",
		transaction: 29.9,
		category: "Essentials",
		method: "Digital",
		country: "United States",
		city: "Austin",
		postalZip: "55205",
		date: "2024-02-21",
		datetime: "2024-02-24T15:10:11Z"
	},
	{
		name: "Kroger",
		phone: "1-914-868-1232",
		transaction: 26.67,
		category: "Essentials",
		method: "Master Card",
		country: "United States",
		city: "Seattle",
		postalZip: "85380",
		date: "2024-02-01",
		datetime: "2024-02-01T09:59:32Z"
	},
	{
		name: "Best Buy",
		phone: "1-385-729-5735",
		transaction: 34.51,
		category: "Commute",
		method: "Digital",
		country: "United States",
		city: "Denver",
		postalZip: "84685",
		date: "2024-02-04",
		datetime: "2024-02-04T10:10:10Z"
	},
	{
		name: "Marcus McQueen",
		phone: "1-385-728-5735",
		transaction: 99.99,
		category: "Entertainment",
		method: "Visa",
		country: "United States",
		city: "Dallas",
		postalZip: "85379",
		date: "2024-03-24",
		datetime: "2024-03-24T18:59:59Z"
	},
	{
		name: "Costco",
		phone: "123-456-7890",
		transaction: 250.75,
		category: "Commute",
		method: "Master Card",
		country: "United States",
		city: "New York",
		postalZip: "10001",
		date: "2024-03-28",
		datetime: "2024-03-28T17:39:40Z"
	},
	{
		name: "Walmart",
		phone: "20-1234-5678",
		transaction: 150.20,
		category: "Eat out",
		method: "Digital",
		country: "United States",
		city: "Boston",
		postalZip: "10003",
		date: "2024-03-29",
		datetime: "2024-03-29T16:29:39Z"
	},
	{
		name: "Best Buy",
		phone: "3-1234-5678",
		transaction: 3.18,
		category: "Eat out",
		method: "Visa",
		country: "United States",
		city: "New Orleans",
		postalZip: "10004",
		date: "2024-03-30",
		datetime: "2024-03-30T16:10:00Z"
	},
	{
		name: "Target",
		phone: "30-12345678",
		transaction: 75.50,
		category: "Eat out",
		method: "Master Card",
		country: "United States",
		city: "Alberquerque",
		postalZip: "10005",
		date: "2024-03-31",
		datetime: "2024-03-31T14:15:20Z"
	},
	{
		name: "Target",
		phone: "30-12345678",
		transaction: 100,
		category: "Fitness",
		method: "Master Card",
		country: "United States",
		city: "Alberquerque",
		postalZip: "10005",
		date: "2024-03-31",
		datetime: "2024-03-31T14:15:20Z"
	}
];