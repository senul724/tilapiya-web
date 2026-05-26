"use client";

import Link from "next/link";
import { specials } from "@/lib/data/menu";

// export const Route = createFileRoute("/specials")({
//   head: () => ({
//     meta: [
//       { title: "Chef's Specials — Tilapiya Colombo" },
//       { name: "description", content: "Limited weekly specials and signature plates from the Tilapiya kitchen and bar." },
//       { property: "og:title", content: "Chef's Specials — Tilapiya Colombo" },
//       { property: "og:description", content: "Hand-picked specials, seafood feasts, and crafted cocktails." },
//       { property: "og:image", content: s2 },
//     ],
//   }),
//   component: SpecialsPage,
// });

export default function SpecialsPage() {
	return (
		<div className="min-h-screen">
			<section className="pt-40 pb-20 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-6 text-primary">Limited · Weekly Rotation</p>
					<h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
						Chef's <span className="italic text-primary">specials.</span>
					</h1>
					<p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
						A handful of plates and pours we're especially proud of this week —
						from the wood-fire kitchen and the marble bar.
					</p>
				</div>
			</section>

			<section className="py-24 px-6">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{specials.map((s) => (
						<article key={s.title} className="group">
							<div className="relative overflow-hidden aspect-[4/5] mb-6">
								<img
									src={s.img}
									alt={s.title}
									loading="lazy"
									width={1024}
									height={1280}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
								<span className="absolute top-4 left-4 bg-primary/95 text-primary-foreground text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
									{s.eyebrow}
								</span>
							</div>
							<div className="flex items-baseline justify-between gap-4 mb-2">
								<h3 className="font-display text-2xl">{s.title}</h3>
								<span className="text-primary text-sm whitespace-nowrap">
									{s.price}
								</span>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{s.note}
							</p>
						</article>
					))}
				</div>
			</section>

			<section className="py-24 px-6 border-t border-border">
				<div className="max-w-3xl mx-auto text-center">
					<p className="eyebrow mb-4">Reserve</p>
					<h2 className="font-display text-4xl md:text-5xl mb-6">
						Tables for specials fill fast.
					</h2>
					<div className="flex flex-wrap gap-4 justify-center">
						<a
							href="tel:+94779494394"
							className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-all"
						>
							Call to Reserve
						</a>
						<Link
							href="/menu"
							className="border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
						>
							Full Menu
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
