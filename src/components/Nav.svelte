<script>
	export let segment;
	let isOpen = false;
	function toggleNav() {
		isOpen = !isOpen
	}
</script>

<style>
	@media(min-width: 769px) {
		nav {
			border-bottom: 1px solid gray;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="logo.png" alt="logo" width="30" height="30">
    </a>

    <span
			role="button"
			class="navbar-burger"
			class:is-active={isOpen}
			aria-label="menu"
			aria-expanded="false"
			on:click={toggleNav}
		>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
		</span>
  </div>

  <div
		class="navbar-menu"
		class:is-active={isOpen}
	>
    <div class="navbar-start">
      <a 
				class="navbar-item"
				class:is-active={segment === undefined}
				href="/"
			>
        Home
      </a>

      <a
				class="navbar-item"
				class:is-active={segment === 'about'}
				href="/about"
			>
        About
      </a>
    </div>
  </div>
</nav>