"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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
		src: "/gallery-1.jpg",
		alt: "Sri Lankan rice & curry spread",
		tag: "Kitchen",
		span: "row-span-2",
	},
	{ src: "/interior.jpg", alt: "Restaurant interior", tag: "Room", span: "" },
	{
		src: "/gallery-2.jpg",
		alt: "Bartender pouring a cocktail",
		tag: "Bar",
		span: "",
	},
	{
		src: "/gallery-3.jpg",
		alt: "Live band performing on stage",
		tag: "Nightly",
		span: "row-span-2",
	},
	{
		src: "/hero-tilapia.jpg",
		alt: "Charcoal grilled whole tilapia",
		tag: "Signature",
		span: "",
	},
	{ src: "/dish-1.jpg", alt: "Signature dish plating", tag: "Plate", span: "" },
	{
		src: "/gallery-4.jpg",
		alt: "Grilled prawns on charcoal",
		tag: "Charcoal",
		span: "",
	},
	{
		src: "/gallery-5.jpg",
		alt: "Restaurant exterior at night",
		tag: "After Dark",
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
	{ src: "/dish-3.jpg", alt: "Prawn wasabi bowl", tag: "Bowl", span: "" },
];

export default function GalleryPage() {
	return (
		<div className="min-h-screen">
			<SiteHeader />

			<section className="pt-40 pb-16 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-6">Through the lens</p>
					<h1 className="font-display text-6xl md:text-8xl leading-none">
						The <span className="italic text-primary">Gallery</span>.
					</h1>
					<p className="mt-8 max-w-xl text-muted-foreground">
						Evenings at Race Course — the room, the plates, the bar, the band. A
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

			<SiteFooter />
		</div>
	);
}
