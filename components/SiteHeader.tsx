"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const links = (
		<>
			<Link
				href="/"
				className="hover:text-primary transition-colors active:text-primary"
				onClick={() => setOpen(false)}
			>
				Home
			</Link>
			<Link
				href="/menu"
				className="hover:text-primary transition-colors active:text-primary"
				onClick={() => setOpen(false)}
			>
				Menu
			</Link>
			<Link
				href="/specials"
				className="hover:text-primary transition-colors active:text-primary"
				onClick={() => setOpen(false)}
			>
				Specials
			</Link>
			<Link
				href="/gallery"
				className="hover:text-primary transition-colors active:text-primary"
				onClick={() => setOpen(false)}
			>
				Gallery
			</Link>
			<Link
				href="/events"
				className="hover:text-primary transition-colors active:text-primary"
				onClick={() => setOpen(false)}
			>
				Events
			</Link>
		</>
	);

	return (
		<header
			className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
				scrolled || open
					? "backdrop-blur-md bg-background/85 border-b border-border py-3"
					: "py-6"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				<Link href="/" className="flex items-baseline gap-2">
					<span className="font-display text-2xl tracking-tight text-foreground">
						Tilapiya
					</span>
					<span className="eyebrow text-[0.6rem] text-muted-foreground">
						Colombo
					</span>
				</Link>
				<nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
					{links}
				</nav>
				<div className="flex items-center gap-3">
					<a
						href="tel:+94779494394"
						className="hidden sm:inline-flex items-center gap-2 border border-primary/40 text-primary px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-all"
					>
						Reserve
					</a>
					<button
						aria-label="Menu"
						onClick={() => setOpen((v) => !v)}
						className="md:hidden p-2 text-foreground"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							{open ? (
								<path d="M6 6l12 12M6 18L18 6" />
							) : (
								<>
									<path d="M3 7h18" />
									<path d="M3 17h18" />
								</>
							)}
						</svg>
					</button>
				</div>
			</div>
			{open && (
				<nav className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-5 text-sm text-muted-foreground">
					{links}
				</nav>
			)}
		</header>
	);
}
