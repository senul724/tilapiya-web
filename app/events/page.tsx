"use client";

import { occasions, upcoming } from "@/lib/data/events";
import Link from "next/link";

// export const Route = createFileRoute("/events")({
// 	head: () => ({
// 		meta: [
// 			{ title: "Events & Private Dining — Tilapiya Colombo" },
// 			{
// 				name: "description",
// 				content:
// 					"Host birthdays, bachelor parties, anniversaries, corporate gatherings and more at Tilapiya Colombo. Free BYOB, private rooms with karaoke, live music every night.",
// 			},
// 			{ property: "og:title", content: "Events at Tilapiya Colombo" },
// 			{
// 				property: "og:description",
// 				content:
// 					"Free BYOB, private karaoke rooms, customised menus. Your event, your way.",
// 			},
// 			{ property: "og:image", content: celebrate },
// 		],
// 	}),
// 	component: EventsPage,
// });
//

export default function EventsPage() {
	return (
		<div className="min-h-screen">

			{/* HERO */}
			<section className="relative pt-40 pb-24 px-6 overflow-hidden border-b border-border">
				<img
					src="/event-celebrate.jpg"
					alt=""
					aria-hidden
					className="absolute inset-0 w-full h-full object-cover opacity-30"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
				<div className="relative max-w-7xl mx-auto">
					<p className="eyebrow mb-6 text-primary">
						Private dining · BYOB · Live music
					</p>
					<h1 className="font-display text-6xl md:text-8xl leading-none">
						Celebrate <span className="italic text-primary">at Tilapiya</span>.
					</h1>
					<p className="mt-8 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
						From intimate gatherings to grand celebrations — we've got the space
						and the vibe for every occasion. Free BYOB with zero corkage,
						private rooms with karaoke, and live bands every day of the week.
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<a
							href="tel:+94779494394"
							className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
						>
							Enquire +94 77 949 4394
						</a>
						<a
							href="mailto:hello@tilapiyacolombo.lk"
							className="border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
						>
							Email Us
						</a>
					</div>
				</div>
			</section>

			{/* UPCOMING */}
			<section className="py-24 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-4">Upcoming</p>
					<h2 className="font-display text-5xl md:text-6xl mb-12">
						On the calendar.
					</h2>

					<div className="grid md:grid-cols-2 gap-10 items-center">
						<div className="relative aspect-[4/3] overflow-hidden">
							<img
								src="/event-birthday.jpg"
								alt="Birthday celebration"
								loading="lazy"
								className="w-full h-full object-cover"
							/>
						</div>
						{upcoming.map((e) => (
							<article
								key={e.title}
								className="bg-card/40 border border-border p-10"
							>
								<p className="eyebrow text-primary mb-4">
									{e.date} · {e.time}
								</p>
								<h3 className="font-display text-4xl mb-5">{e.title}</h3>
								<p className="text-muted-foreground leading-relaxed mb-6">
									{e.body}
								</p>
								<p className="text-xs uppercase tracking-[0.3em] text-primary">
									{e.cta}
								</p>
								<a
									href="tel:+94779494394"
									className="mt-8 inline-block border border-primary/40 text-primary px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
								>
									Reserve
								</a>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* PLAN */}
			<section className="py-24 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<div>
						<p className="eyebrow mb-6">Plan with us</p>
						<h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
							Your next event,{" "}
							<span className="italic text-primary">built around you</span>.
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-5">
							Welcome to Tilapiya Colombo — Colombo's best BYOB restaurant at
							Race Course, Colombo 07. Whether you're planning a private dining
							experience with karaoke, a lunch buffet for your team, or a
							celebration at the most unique BYOB place in town, our events are
							built around you.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Free BYOB with zero corkage. Live band music seven nights a week.
							Private rooms tailored to every event. Restaurants in Colombo
							rarely offer this combination.
						</p>
					</div>
					<div className="relative aspect-[4/5] overflow-hidden">
						<img
							src="/event-private.jpg"
							alt="Private dining room with karaoke"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* OCCASIONS */}
			<section className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-4">We host</p>
					<h2 className="font-display text-5xl md:text-6xl mb-16">
						Every kind of occasion.
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
						{occasions.map((o) => (
							<article
								key={o.title}
								className="bg-background p-8 hover:bg-card/40 transition-colors"
							>
								<h3 className="font-display text-2xl mb-3 text-foreground">
									{o.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{o.body}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-32 px-6 border-t border-border text-center">
				<p className="eyebrow mb-6">Let's make it happen</p>
				<h2 className="font-display text-5xl md:text-7xl mb-6">
					Bring the people.{" "}
					<span className="italic text-primary">We'll bring the night.</span>
				</h2>
				<div className="mt-10 flex flex-wrap gap-4 justify-center">
					<a
						href="tel:+94779494394"
						className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
					>
						Call to book
					</a>
					<Link
						href="/menu"
						className="border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
					>
						See the menu
					</Link>
				</div>
			</section>

		</div>
	);
}
