"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroSlides = [
	{ src: "/slides/1.jpg", alt: "Tilapiya Colombo" },
	{ src: "/slides/2.jpg", alt: "Tilapiya Colombo" },
	{ src: "/slides/3.jpg", alt: "Tilapiya Colombo" },
];

const reviews = [
	{
		name: "Shanika P.",
		text: "An unforgettable evening — the grilled tilapia is sublime and the ambience pure magic.",
		source: "Google",
	},
	{
		name: "Rohan D.",
		text: "Tilapiya has quietly become the most consistent table in Colombo. Service, food, atmosphere — all 10/10.",
		source: "TripAdvisor",
	},
	{
		name: "Aisha M.",
		text: "BYOB, live band, private dining room for our anniversary. They thought of every detail.",
		source: "Facebook",
	},
];

const highlights = [
	{
		img: "/dish-1.jpg",
		eyebrow: "Signature",
		title: "Whole Grilled Tilapia",
		note: "Lake-fresh, charred over open flame",
	},
	{
		img: "/dish-2.jpg",
		eyebrow: "Healthy",
		title: "Prawn Wasabi Bowl",
		note: "Sticky rice · kimchi · lime chili soya",
	},
	{
		img: "/dish-1.jpg",
		eyebrow: "Bar",
		title: "House Mocktails",
		note: "Crafted nightly by our mixologists",
	},
];

const weekSpecials = [
	{
		img: "/special-1.jpg",
		eyebrow: "This Week",
		title: "Lake Lobster Thermidor",
		price: "LKR 6,800",
		note: "Brandy cream, gruyère gratiné.",
	},
	{
		img: "/special-2.jpg",
		eyebrow: "Sharing",
		title: "Captain's Seafood Platter",
		price: "LKR 9,400",
		note: "Prawns, calamari, crab — for two.",
	},
	{
		img: "/special-3.jpg",
		eyebrow: "From the Bar",
		title: "Smoked Maple Old-Fashioned",
		price: "LKR 1,950",
		note: "Hickory smoke, maple, charred orange.",
	},
];

const galleryPreview = [
	{
		src: "/exterior.jpg",
		alt: "Restaurant Exterior",
		tag: "Roadside View",
		span: "col-span-2 row-span-2",
	},
	{
		src: "/dine-potrait.jpg",
		alt: "Dine IN",
		tag: "Dine In",
		span: "row-span-2",
	},
	{
		src: "/music.jpg",
		alt: "Live band performing on stage",
		tag: "Live Music",
		span: "col-span-2 row-span-2",
	},
	{ src: "/burger1.jpg", alt: "Signature burger", tag: "Burger", span: "" },
	{
		src: "/hero-tilapia.jpg",
		alt: "Charcoal grilled whole tilapia",
		tag: "Signature",
		span: "",
	},
];

export default function Index() {
	const [slide, setSlide] = useState(0);
	useEffect(() => {
		const id = setInterval(
			() => setSlide((i) => (i + 1) % heroSlides.length),
			5500,
		);
		return () => clearInterval(id);
	}, []);

	const prevSlide = (slide - 1 + heroSlides.length) % heroSlides.length;

	return (
		<div className="">
			{/* HERO */}
			<section className="relative min-h-[100vh] flex items-end overflow-hidden grain">
				<div className="absolute inset-0">
					{heroSlides.map((s, i) => (
						<img
							key={s.src}
							src={s.src}
							alt={s.alt}
							width={1920}
							height={1280}
							loading={i === 0 ? "eager" : "lazy"}
							className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
								i === slide ? "opacity-100" : "opacity-0"
							} ${i === slide || i === prevSlide ? "hero-slide" : ""}`}
						/>
					))}
					{/* Bottom text-area gradient — dark only where the text sits */}
					<div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
					<div className="absolute bottom-0 left-0 w-full h-full  bg-gradient-to-tr from-black via-black/60  to-black/20" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:pb-32 w-full">
					<h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-4xl text-foreground drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
						Dining & socialising,
						<br />
						<span className="italic text-primary">by friends for friends.</span>
					</h1>
					<p className="mt-8 max-w-xl text-base md:text-lg text-foreground/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
						An indulgent escape in the midst of the city, soul-soothing
						delicacies, BYOB, live music every night.
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href="/menu"
							className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
						>
							View Our Menu
							<span aria-hidden>→</span>
						</Link>
						<a
							href="tel:+94779494394"
							className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
						>
							Reserve a Table
						</a>
					</div>
					<div className="mt-16 pt-6 border-t border-white/10 flex items-center justify-between gap-6 flex-wrap">
						<div className="flex gap-2">
							{heroSlides.map((_, i) => (
								<button
									key={i}
									aria-label={`Go to slide ${i + 1}`}
									onClick={() => setSlide(i)}
									className={`h-[2px] transition-all duration-500 ${
										i === slide ? "w-10 bg-primary" : "w-5 bg-foreground/25"
									}`}
								/>
							))}
						</div>
						<div className="text-[0.55rem] uppercase tracking-[0.4em] text-foreground/60 text-right">
							Race Course Arcade <span className="text-primary mx-2">·</span>{" "}
							Colombo 07
						</div>
					</div>
				</div>
			</section>

			{/* STORY */}
			<section id="story" className="py-32 px-6">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<div className="relative grid grid-cols-2 gap-4">
						<img
							src="/dine-area-potrait.jpg"
							alt="Restaurant interior"
							loading="lazy"
							width={800}
							height={600}
							className="w-full h-[420px] object-cover translate-y-8"
						/>
						<img
							src="/dine-potrait.jpg"
							alt="Food spread"
							loading="lazy"
							width={800}
							height={600}
							className="w-full h-[420px] object-cover"
						/>
					</div>
					<div>
						<p className="eyebrow mb-6">Discover</p>
						<h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
							A haven, woven from{" "}
							<span className="italic text-primary">good company</span> and
							great food.
						</h2>
						<div className="space-y-5 text-muted-foreground leading-relaxed">
							<p>
								We offer absolutely free BYOB, private dining rooms with
								karaoke, customised events, an "All You Can Eat" menu, buffet,
								and live music featuring a band every day of the week.
							</p>
							<p>
								Tilapiya Colombo is the manifestation of our vision to offer you
								an indulgent escape in the midst of the hustle and bustle of the
								city — a fraternity of like-minded patrons who appreciate a
								great meal in good company.
							</p>
						</div>
						<div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
							{[
								["12+", "Years pouring"],
								["7", "Nights live music"],
								["BYOB", "Always free"],
							].map(([n, l]) => (
								<div key={l}>
									<div className="font-display text-3xl text-primary">{n}</div>
									<div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
										{l}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* HIGHLIGHTS */}
			<section className="py-32 px-6 border-t border-border">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-end justify-between mb-16 flex-wrap gap-6">
						<div>
							<p className="eyebrow mb-4">Tonight on the table</p>
							<h2 className="font-display text-5xl md:text-6xl">
								From our kitchen.
							</h2>
						</div>
						<Link
							href="/menu"
							className="text-xs uppercase tracking-[0.3em] text-primary hover:underline underline-offset-8"
						>
							Full Menu →
						</Link>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{highlights.map((h) => (
							<article key={h.title} className="group">
								<div className="relative overflow-hidden aspect-[4/5] mb-6">
									<img
										src={h.img}
										alt={h.title}
										loading="lazy"
										width={1024}
										height={1024}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
								</div>
								<p className="eyebrow mb-2">{h.eyebrow}</p>
								<h3 className="font-display text-2xl mb-2">{h.title}</h3>
								<p className="text-sm text-muted-foreground">{h.note}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* SPECIALS */}
			<section className="py-32 px-6 border-t border-border bg-card/20">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-end justify-between mb-16 flex-wrap gap-6">
						<div>
							<p className="eyebrow mb-4 text-primary">Limited · This Week</p>
							<h2 className="font-display text-5xl md:text-6xl">
								Chef's specials.
							</h2>
							<p className="mt-4 max-w-md text-muted-foreground">
								A short list of plates and pours we're especially proud of right
								now.
							</p>
						</div>
						<Link
							href="/specials"
							className="text-xs uppercase tracking-[0.3em] text-primary hover:underline underline-offset-8"
						>
							View All Specials →
						</Link>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{weekSpecials.map((s) => (
							<article
								key={s.title}
								className="group bg-background border border-border overflow-hidden flex flex-col"
							>
								<div className="relative overflow-hidden aspect-[4/3]">
									<img
										src={s.img}
										alt={s.title}
										loading="lazy"
										width={1024}
										height={1280}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<span className="absolute top-4 left-4 bg-primary/95 text-primary-foreground text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
										{s.eyebrow}
									</span>
								</div>
								<div className="p-6 flex-1 flex flex-col">
									<div className="flex items-baseline justify-between gap-3 mb-2">
										<h3 className="font-display text-2xl">{s.title}</h3>
										<span className="text-primary text-sm whitespace-nowrap">
											{s.price}
										</span>
									</div>
									<p className="text-sm text-muted-foreground">{s.note}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* REVIEWS */}
			<section className="py-32 px-6 border-t border-border">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<p className="eyebrow mb-4 text-primary">Loved by Colombo</p>
						<h2 className="font-display text-5xl md:text-6xl mb-4">
							Kind words.
						</h2>
						<div className="flex items-center justify-center gap-2 text-primary">
							{"★★★★★".split("").map((s, i) => (
								<span key={i} className="text-lg">
									{s}
								</span>
							))}
							<span className="ml-3 text-sm text-muted-foreground tracking-wider">
								4.8 · 1,200+ reviews
							</span>
						</div>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{reviews.map((r) => (
							<figure
								key={r.name}
								className="bg-card border border-border/80 p-8 flex flex-col gap-5 hover:border-primary/40 transition-colors"
							>
								<div className="flex items-center gap-1 text-primary">
									{"★★★★★".split("").map((s, i) => (
										<span key={i}>{s}</span>
									))}
								</div>
								<blockquote className="text-foreground/95 leading-relaxed text-base">
									"{r.text}"
								</blockquote>
								<figcaption className="flex items-center gap-3 pt-5 border-t border-border mt-auto">
									<div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center font-display text-primary">
										{r.name.charAt(0)}
									</div>
									<div>
										<div className="text-sm text-foreground font-medium">
											{r.name}
										</div>
										<div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
											via {r.source}
										</div>
									</div>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			{/* GALLERY PREVIEW */}
			<section className="py-32 px-6 border-t border-border bg-card/20">
				<div className="max-w-7xl mx-auto">
					<div className="flex items-end justify-between mb-16 flex-wrap gap-6">
						<div>
							<p className="eyebrow mb-4 text-primary">Through the lens</p>
							<h2 className="font-display text-5xl md:text-6xl">
								The Gallery.
							</h2>
						</div>
						<Link
							href="/gallery"
							className="text-xs uppercase tracking-[0.3em] text-primary hover:underline underline-offset-8"
						>
							View All →
						</Link>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-3 md:gap-4 grid-flow-dense">
						{galleryPreview.map((p, i) => (
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
				</div>
			</section>

			{/* CTA */}
			<section
				id="visit"
				className="py-32 px-6 border-t border-border relative overflow-hidden"
			>
				<div className="max-w-4xl mx-auto text-center">
					<p className="eyebrow mb-6">Private Dining</p>
					<h2 className="font-display text-5xl md:text-7xl mb-6">
						Your event, your way.
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto mb-10">
						Karaoke rooms, customised menus, buffets and live bands — we host
						the evenings that become stories.
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Link
							href="/events"
							className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
						>
							Explore Events
						</Link>
						<Link
							href="/gallery"
							className="border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
						>
							See the Gallery
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
