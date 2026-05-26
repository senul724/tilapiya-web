type Item = { name: string; desc?: string; price: string };
type Section = { title: string; items: Item[] };

export const specials = [
	{
		img: "/special-1.jpg",
		eyebrow: "This Week",
		title: "Lake Lobster Thermidor",
		price: "LKR 6,800",
		note: "Whole lobster, brandy cream, gruyère gratiné — finished in the wood oven.",
	},
	{
		img: "/special-2.jpg",
		eyebrow: "Sharing",
		title: "Captain's Seafood Platter",
		price: "LKR 9,400",
		note: "Tiger prawns, calamari, crab claws and the catch of the day. Built for two.",
	},
	{
		img: "/special-3.jpg",
		eyebrow: "From the Bar",
		title: "Smoked Maple Old-Fashioned",
		price: "LKR 1,950",
		note: "Hickory-smoked rye, maple, charred orange. Served under glass.",
	},
	{
		img: "/dish-1.jpg",
		eyebrow: "Signature",
		title: "Whole Charred Tilapia",
		price: "Per 100g",
		note: "Lake-fresh tilapia, open-flame char, herb butter and lime.",
	},
	{
		img: "/dish-2.jpg",
		eyebrow: "Healthy",
		title: "Wasabi Prawn Bowl",
		price: "LKR 2,100",
		note: "Sticky rice, kimchi slaw, lime chili soya, sesame crunch.",
	},
	{
		img: "/dish-3.jpg",
		eyebrow: "Bar",
		title: "Garden Mocktail Flight",
		price: "LKR 1,400",
		note: "Three botanical pours — basil, lychee-rose, smoked pineapple.",
	},
];

export const menu: Section[] = [
	{
		title: "Burgers",
		items: [
			{
				name: "The Yankee",
				desc: "Crumb fried chicken breast, braised red cabbage, fries, mustard mayo",
				price: "1,650",
			},
			{
				name: "El Double",
				desc: "Grilled beef fillet, caramelised onion, fries, mustard mayo",
				price: "1,950",
			},
			{
				name: "Holy Chunk",
				desc: "Teriyaki pork belly, pickled vegetables, fries, mustard mayo",
				price: "1,850",
			},
		],
	},
	{
		title: "Healthy Bowls",
		items: [
			{
				name: "Chicken Bowl",
				desc: "Wasabi sticky rice, kimchi, pickles, sesame, lime chili soya dressing",
				price: "1,750",
			},
			{
				name: "Tuna Bowl",
				desc: "Wasabi sticky rice, kimchi, pickled onion, sesame, lime chili soya",
				price: "1,850",
			},
			{
				name: "Tofu Bowl",
				desc: "Wasabi sticky rice, kimchi, kidney beans, sesame, lime chili soya",
				price: "1,650",
			},
			{
				name: "Prawn Bowl",
				desc: "Wasabi sticky rice, kimchi, pickled onion, sesame, lime chili soya",
				price: "1,950",
			},
		],
	},
	{
		title: "Salads & Soups",
		items: [
			{
				name: "Asian Chicken Salad",
				desc: "Crispy noodles, sesame ginger dressing",
				price: "1,850",
			},
			{
				name: "Smoked Salmon Salad",
				desc: "Capers, dill cream, mixed leaves",
				price: "1,950",
			},
			{
				name: "Thai Seafood Soup",
				desc: "Tom Yum broth, prawn, squid, mushroom",
				price: "2,100",
			},
			{
				name: "Caesar Salad",
				desc: "Romaine, anchovy, parmesan, herbed croutons",
				price: "1,750",
			},
			{
				name: "Cream of Mushroom",
				desc: "Forest mushrooms, thyme, truffle oil drizzle",
				price: "1,600",
			},
		],
	},
	{
		title: "Signature Tilapia & Mains",
		items: [
			{
				name: "Whole Grilled Tilapia",
				desc: "Charcoal grilled, herb butter, lime — per 100g",
				price: "490",
			},
			{
				name: "Crispy Fried Tilapia",
				desc: "Devilled or with seeni sambol",
				price: "Per 100g · 750",
			},
			{
				name: "Grilled Beef Tenderloin",
				desc: "800g · red wine jus, roasted potato",
				price: "4,500",
			},
			{
				name: "Pork Ribs (Slow Cooked)",
				desc: "800g · sticky bourbon glaze",
				price: "4,200",
			},
			{
				name: "Whole Roast Chicken",
				desc: "800g · lemon, garlic, herbs",
				price: "4,200",
			},
			{
				name: "Lamb Shank",
				desc: "500g · braised, mashed potato",
				price: "4,950",
			},
		],
	},
	{
		title: "Island Delights",
		items: [
			{ name: "Chicken Curry, Roast Paan & Pol Sambal", price: "2,950" },
			{ name: "Beef Curry, Roast Paan & Pol Sambal", price: "3,100" },
			{ name: "Prawn Curry, Roast Paan & Pol Sambal", price: "3,300" },
			{ name: "Cuttlefish Curry, Roast Paan & Pol Sambal", price: "4,100" },
			{ name: "Seafood Combo, Roast Paan & Pol Sambal", price: "4,100" },
			{ name: "Vegetable Curry, Roast Paan & Pol Sambal", price: "3,100" },
		],
	},
	{
		title: "Pasta & Rice",
		items: [
			{ name: "Aglio e Olio Chicken", price: "2,650" },
			{ name: "Carbonara", price: "2,650" },
			{ name: "Seafood Marinara", price: "3,450" },
			{ name: "Prawn Pesto Linguine", price: "3,450" },
			{ name: "Nasi Goreng (Chicken / Prawn)", price: "2,950" },
			{ name: "Mixed Seafood Fried Rice", price: "3,450" },
		],
	},
	{
		title: "Sides",
		items: [
			{ name: "Garlic Bread", price: "750" },
			{ name: "Truffle Fries", price: "950" },
			{ name: "Steamed Jasmine Rice", price: "490" },
			{ name: "Mashed Potato", price: "590" },
			{ name: "Garden Salad", price: "590" },
		],
	},
	{
		title: "Cocktails & Mocktails",
		items: [
			{
				name: "Tilapiya Sour",
				desc: "House gin, lime, egg white, angostura",
				price: "950",
			},
			{
				name: "Race Course Mule",
				desc: "Vodka, ginger beer, lime",
				price: "850",
			},
			{
				name: "Tropic Spritz",
				desc: "Aperol, sparkling, orange",
				price: "900",
			},
			{ name: "Virgin Mojito", desc: "Mint, lime, soda", price: "650" },
			{ name: "Passion Cooler (mocktail)", price: "750" },
		],
	},
	{
		title: "Sweet Endings",
		items: [
			{ name: "Watalappan Crème Brûlée", price: "950" },
			{
				name: "Dark Chocolate Fondant",
				desc: "Vanilla ice cream",
				price: "1,050",
			},
			{ name: "Tropical Fruit Plate", price: "850" },
			{ name: "Trio of Ice Creams", price: "750" },
		],
	},
];
