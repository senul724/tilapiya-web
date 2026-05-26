export function SiteFooter() {
	return (
		<footer id="visit" className="border-t border-border mt-32">
			<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
				<div>
					<img src="/logo.webp" alt="Tilapiya Colombo" className="h-10 md:h-14 w-auto mb-6 opacity-90 hover:opacity-100 transition-opacity" />
					<p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
						Dining & socialising, by friends for friends. An indulgent escape in
						the midst of Colombo.
					</p>
				</div>
				<div>
					<p className="eyebrow mb-4">Visit</p>
					<p className="text-sm leading-relaxed text-foreground/90">
						Race Course Arcade
						<br />
						Colombo 07, Sri Lanka
					</p>
					<p className="text-sm mt-3 text-muted-foreground">
						Open daily · 11:00 – 23:00
					</p>
				</div>
				<div>
					<p className="eyebrow mb-4">Contact</p>
					<a
						href="tel:+94779494394"
						className="block text-sm hover:text-primary transition-colors"
					>
						+94 77 949 4394
					</a>
					<a
						href="https://instagram.com/tilapiya_colombo"
						className="block text-sm mt-2 hover:text-primary transition-colors"
					>
						@tilapiya_colombo
					</a>
				</div>
			</div>
			<div className="border-t border-border py-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
				© {new Date().getFullYear()} Tilapiya Colombo
			</div>
		</footer>
	);
}
