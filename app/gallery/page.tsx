"use client";

// export const Route = createFileRoute("/gallery")({
// 	head: () => ({
// 		meta: [
// 			{ title: "Gallery — Tilapiya Colombo" },
// 			{
// 				name: "description",
// 				content:
// 					"Inside Tilapiya Colombo — interiors, signature plates, cocktails and the live music nights at Race Course, Colombo 07.",
// 			},
// 			{ property: "og:title", content: "Gallery — Tilapiya Colombo" },
// 			{
// 				property: "og:description",
// 				content: "Inside the room. Photos from Tilapiya Colombo.",
// 			},
// 			{ property: "og:image", content: g1 },
// 		],
// 	}),
// 	component: GalleryPage,
// });

const photos = [
	{
		src: "/dine-potrait.jpg",
		alt: "Dine IN",
		tag: "Dine In",
		span: "row-span-2",
	},
	{
		src: "/exterior.jpg",
		alt: "Restaurant Exterior",
		tag: "Roadside View",
		span: "col-span-2 row-span-2",
	},
	{
		src: "/music.jpg",
		alt: "Live band performing on stage",
		tag: "Live Music",
		span: "row-span-2 col-span-2",
	},
	{ src: "/burger1.jpg", alt: "Signature burger", tag: "Burger", span: "" },
	{
		src: "/hero-tilapia.jpg",
		alt: "Charcoal grilled whole tilapia",
		tag: "Signature",
		span: "",
	},
	{
		src: "/crab-curry.jpg",
		alt: "Crab Curry",
		tag: "Crab Curry",
		span: "",
	},
	{
		src: "/gal1.jpg",
		alt: "Dishes",
		tag: "Dishes",
		span: "",
	},
	{ src: "/dish-3.jpg", alt: "Prawn wasabi bowl", tag: "Bowl", span: "" },
	{
		src: "/company.jpg",
		alt: "Company",
		tag: "Cmpany",
		span: "col-span-2 row-span-2",
	},
	{
		src: "/setting-table.jpeg",
		alt: "Friendly Hands",
		tag: "Friendly Hands",
		span: "row-span-2",
	},
	{ src: "/spread.jpg", alt: "Shared table feast", tag: "Shared", span: "" },
	{ src: "/dish-2.jpg", alt: "House cocktails", tag: "Cocktails", span: "" },
	{
		src: "/gallery-6.jpg",
		alt: "Watalappan crème brûlée",
		tag: "Sweet",
		span: "",
	},
];

export default function GalleryPage() {
	return (
		<div className="min-h-screen">
			<section className="pt-40 pb-16 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-6">Through the lens</p>
					<h1 className="font-display text-6xl md:text-8xl leading-none">
						The <span className="italic text-primary">Gallery</span>.
					</h1>
					<p className="mt-8 max-w-xl text-muted-foreground">
						Evenings at Race Course. The room, the plates, the bar, the band. A
						small window into what waits for you at Tilapiya.
					</p>
				</div>
			</section>

			<section className="px-6 py-16">
				<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4">
					{photos.map((p, i) => (
						<figure
							key={i}
							className={`relative overflow-hidden group ${p.span}`}
						>
							<img
								src={p.src}
								alt={p.alt}
								loading="lazy"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
							<figcaption className="absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
								{p.tag}
							</figcaption>
						</figure>
					))}
				</div>
			</section>

			<section className="py-24 px-6 border-t border-border text-center">
				<p className="eyebrow mb-4">Come see for yourself</p>
				<h2 className="font-display text-4xl md:text-5xl mb-8">
					Book a table tonight.
				</h2>
				<a
					href="tel:+94779494394"
					className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
				>
					+94 77 949 4394
				</a>
			</section>
		</div>
	);
}
