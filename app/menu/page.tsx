"use client";

import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { menu } from "@/lib/data/menu";
import { useRouter } from "next/navigation";

// export const Route = createFileRoute("/menu")({
//   head: () => ({
//     meta: [
//       { title: "Menu — Tilapiya Colombo" },
//       { name: "description", content: "Explore the full menu at Tilapiya Colombo — burgers, bowls, Sri Lankan mains, signature tilapia, cocktails and more." },
//       { property: "og:title", content: "Menu — Tilapiya Colombo" },
//       { property: "og:description", content: "Burgers, bowls, Sri Lankan mains, signature tilapia, cocktails." },
//     ],
//   }),
//   component: MenuPage,
// });

function slug(s: string) {
	return s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

export default function MenuPage() {
	const [active, setActive] = useState(menu[0].title);
	const navRef = useRef<HTMLUListElement | null>(null);
	const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

	const router = useRouter();

	// Scroll spy: detect which section is currently in view
	// Scroll spy
	useEffect(() => {
		if (typeof document === "undefined") return; // SSR guard

		const sections = menu
			.map((s) => document.getElementById(slug(s.title)))
			.filter((el): el is HTMLElement => !!el);

		if (!sections.length) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible) {
					const found = menu.find((s) => slug(s.title) === visible.target.id);
					if (found) setActive(found.title);
				}
			},
			{ rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
		);

		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, [menu]); // ← add menu to deps

	// Auto-scroll active nav item into view
	useEffect(() => {
		const el = itemRefs.current[active];
		const nav = navRef.current;
		if (!el || !nav) return;

		const elRect = el.getBoundingClientRect();
		const navRect = nav.getBoundingClientRect();
		const offset =
			elRect.left - navRect.left - navRect.width / 2 + elRect.width / 2;
		nav.scrollBy({ left: offset, behavior: "smooth" });
	}, [active]);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		title: string,
	) => {
		e.preventDefault();
		const target = document.getElementById(slug(title));
		if (!target) return;

		setActive(title);
		router.replace(`#${slug(title)}`);
	};

	return (
		<div className="min-h-screen">
			<SiteHeader />

			{/* HEADER */}
			<section className="pt-40 pb-20 px-6 border-b border-border">
				<div className="max-w-7xl mx-auto">
					<p className="eyebrow mb-6">À la carte</p>
					<h1 className="font-display text-6xl md:text-8xl leading-none">
						The <span className="italic text-primary">Menu </span>.
					</h1>
					<p className="mt-8 max-w-xl text-muted-foreground">
						A living document — prepared fresh, served with intent. Prices in
						LKR. BYOB always welcome.
					</p>
					<div className="mt-10 flex flex-wrap gap-3">
						<a
							href="https://tilapiyacolombo.lk/wp-content/uploads/2024/06/tilapiyacolombo-menu.pdf"
							target="_blank"
							rel="noreferrer"
							className="border border-primary/40 text-primary px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all"
						>
							Download PDF
						</a>
						<a
							href="tel:+94779494394"
							className="border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all"
						>
							Book a table
						</a>
					</div>
				</div>
			</section>

			{/* CATEGORY NAV (scroll-spied + auto-scrolling) */}
			<div className="sticky top-[68px] z-40 bg-background/90 backdrop-blur-md border-b border-border">
				<div className="max-w-7xl mx-auto px-6 relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10" />
					<ul
						ref={navRef}
						className="flex gap-8 py-4 text-xs uppercase tracking-[0.25em] whitespace-nowrap overflow-x-auto scrollbar-none scroll-smooth"
					>
						{menu.map((s) => (
							<li key={s.title} className="shrink-0">
								<a
									href={`#${slug(s.title)}`}
									ref={(el) => {
										itemRefs.current[s.title] = el;
									}}
									onClick={(e) => handleClick(e, s.title)}
									className={`pb-1 transition-colors ${
										active === s.title
											? "text-primary border-b border-primary"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{s.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* SECTIONS */}
			<div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
				{menu.map((section) => (
					<section
						key={section.title}
						id={slug(section.title)}
						className="scroll-mt-40"
					>
						<div className="flex items-baseline gap-6 mb-12">
							<h2 className="font-display text-4xl md:text-5xl">
								{section.title}
							</h2>
							<div className="flex-1 h-px bg-border" />
						</div>
						<ul className="space-y-8">
							{section.items.map((it) => (
								<li
									key={it.name}
									className="grid grid-cols-[1fr_auto] gap-6 group"
								>
									<div>
										<h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
											{it.name}
										</h3>
										{it.desc && (
											<p className="text-sm text-muted-foreground mt-1 max-w-xl leading-relaxed">
												{it.desc}
											</p>
										)}
									</div>
									<div className="flex items-start">
										<span className="font-sans text-lg text-primary whitespace-nowrap">
											Rs {it.price}
										</span>
									</div>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>

			<SiteFooter />
		</div>
	);
}
