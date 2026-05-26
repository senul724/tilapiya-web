"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";

export default function StoryPage() {
	return (
		<div className="min-h-screen">
			<SiteHeader />

			<section className="pt-40 pb-16 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-6">Who we are</p>
					<h1 className="font-display text-6xl md:text-8xl leading-none">
						Our <span className="italic text-primary">Story</span>.
					</h1>
					<p className="mt-8 max-w-xl text-muted-foreground text-lg">
						Tilapiya Colombo is the latest addition to the already popular
						Tilapiya franchise with a presence in Ekala & Bopitiya. Expansion to
						Colombo was a natural progression given the success so far and the
						overwhelming demand.
					</p>
				</div>
			</section>

			{/* PHILOSOPHY */}
			<section className="py-24 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<div className="order-2 md:order-1">
						<h2 className="font-display text-4xl md:text-5xl mb-8">
							Philosophy.
						</h2>
						<div className="space-y-6 text-muted-foreground leading-relaxed">
							<p>
								We have a very simple philosophy - to bring people closer
								together through the shared love for quality food and good
								company. Hence, we've created a cozy space that welcomes and
								embraces all with open arms.
							</p>
							<p>
								To us, everyone who walks through the door is a friend & we will
								make sure you're well taken care of - because that's what
								friends do! We specialize in soul food that is prepared to
								perfection using the best ingredients by expert chefs.
							</p>
							<p>
								Our portions are generously sized and offer value for money. At
								Tilapiya Colombo we believe every day, every meal is worth
								celebrating. So, come by & let's celebrate together.
							</p>
						</div>
					</div>
					<div className="order-1 md:order-2">
						<div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
							<img
								src="/team.jpeg"
								alt="Setting the table"
								className="absolute inset-0 w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* FOUNDERS */}
			<section className="py-24 px-6">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<div>
						<div className="relative aspect-[3/2]  overflow-hidden">
							<img
								src="/founders.jpeg"
								alt="founders"
								className="absolute inset-0 w-full h-full object-cover"
							/>
						</div>
					</div>
					<div>
						<h2 className="font-display text-4xl md:text-5xl mb-8">
							Founders.
						</h2>
						<div className="space-y-6 text-muted-foreground leading-relaxed">
							<p>
								Tilapiya Colombo is the brainchild of a group of friends,
								Chanuka Suraweera, Hashan Jayamaha, Chandu De Silva, and
								Madhushan Thiwantha, who set out to create the perfect space for
								fraternizing.
							</p>
							<p>
								As such, every aspect of the restaurant - from the diverse menu
								to the cozy, artistic interiors - has a personal touch and has
								been meticulously thought out and curated to reflect a warm,
								welcoming vibe.
							</p>
							<p className="text-xl text-foreground font-display italic mt-4">
								"In other words, the founders' vision can be best described as
								'dining and socializing, by friends for friends.'"
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 px-6 border-t border-border text-center bg-card/20">
				<p className="eyebrow mb-4">Experience it</p>
				<h2 className="font-display text-4xl md:text-5xl mb-8">
					Your event, your way.
				</h2>
				<div className="flex flex-wrap gap-4 justify-center">
					<a
						href="tel:+94779494394"
						className="inline-flex bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
					>
						+94 77 949 4394
					</a>
					<Link
						href="/contact"
						className="border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
					>
						Enquire Now
					</Link>
				</div>
			</section>

			<SiteFooter />
		</div>
	);
}
