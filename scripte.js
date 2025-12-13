document.addEventListener('DOMContentLoaded', function() {
	const tabs = document.querySelectorAll('.grandiv');
	const navButtons = document.querySelectorAll('nav button');

	function hideAll() {
		tabs.forEach(t => t.classList.remove('active'));
	}

	function show(hash) {
		hideAll();
		const target = document.querySelector(hash);
		if (target) target.classList.add('active');
	}

	// Ensure at least one tab is active (the HTML sets the homepage active)
	if (!document.querySelector('.grandiv.active') && tabs.length > 0) {
		tabs[0].classList.add('active');
	}

	navButtons.forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			const a = btn.closest('a');
			let href = a ? a.getAttribute('href') : btn.getAttribute('data-target');
			if (!href) return;
			if (!href.startsWith('#')) href = '#'+href;
			show(href);
			// update URL hash without scrolling
			history.replaceState(null, '', href);
			// update active state on buttons
			navButtons.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
		});
	});

	// If the URL contains a hash, show that tab on load
	if (location.hash) show(location.hash);
});

