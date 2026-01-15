<script>
	import KickMapLogo from '$src/lib/images/kickmapLogo.png';
	// import KickMapLogo from '$lib/images/kickmapLogo.png';

	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';

	let searchPrompt = "Enter a tag of an event name or club ex.('AISC' or 'InterestEvent')";


</script>

<svelte:head>
	<title>KickMap</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<!-- <span class="welcome">
			<picture> -->
				<!-- <source srcset={welcome} type="image/webp" /> -->
				<img src={KickMapLogo} alt="KickMap Logo" />
			<!-- </picture>
		</span> -->

	</h1>

	<!-- ------------------------------------------------------------------ -->
	<input
	class="searchInput"
	type="text"
	name=""
	placeholder = {searchPrompt}
	>

</section>
<div class="searchBox">
	<button
		class="searchButton"
	>   
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="29" height="29"
			viewBox="0 0 29 29"
			fill="none"
		>
			<g
				clip-path="url(#clip0_2_17)"
			>
				<g
					filter="url(#filter0_d_2_17)"
				>

					<path
						d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
						stroke="white"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						shape-rendering="crispEdges"
					>
					</path>
				</g>
			</g>


			<defs>
				<filter
					id="filter0_d_2_17"
					x="-0.418549"
					y="3.70435"
					width="29.7139"
					height="29.7139"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters = "sRGB"
				>

					<feFlood
						flood-opacity="0"
						result="BackgroundImageFix"
					>
					</feFlood>


					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					>
					</feColorMatrix>


					<feOffset dy="4">
					</feOffset>

					<feGaussianBlur stdDeviation="2">
					</feGaussianBlur>

					<feComposite in2="hardAlpha" operator="out">
					</feComposite>

					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					>
					</feColorMatrix>

					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2_17"
					>
					</feBlend>


					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_2_17"
						result = "shape"
					>
					</feBlend>

				</filter>

				<clipPath id="clip0_2_17">
					<rect
						width="28.0702"
						height="28.0702"
						fill="white"
						transform="translate(0.403503 0.526367)"
					>
					</rect>
				</clipPath>
			</defs>
		</svg>
	</button>

	<!-- ------------------------------------------------------------------ -->

	<!-- <h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2> -->

	<!-- <Counter /> -->
</div>

<style>
	@import url('https://fonts.cdnfonts.com/css/stanley');

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	} */

	/* .welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */


    .searchBox {
		z-index: 9999;
		color: #EC7524;
        margin: auto;
        display: flex;
        max-width: 40em;
        align-items: center;
        justify-content: space-between;
        gap: 4em;
        background: #3a1910;
        border-radius: 1em;
        position: relative;
    }

    .searchButton {
        color: #f9f7ea;
        position: absolute;
        right: 15px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        /* background: var(--gradient-2, linear-gradient(90deg, #2AF598 0%, #009EFD 100%)); */
        background: #EC7524;
        border: 0;
        display: inline-block;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    }


    /*hover effect*/
    button:hover {
        color: #fff;
        /* background-color: #1A1A1A; */
        background-color: #EC7524;
        box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
        transform: translateY(-3px);
    }

    /*button pressing effect*/
    button:active {
        box-shadow: none;
        transform: translateY(0);
    }

    .searchInput {
        border: none;
        background: none;
        outline: none;
        color: white;
        font-size: 1em;
        /* padding: 1.5em 460px 24px 26px; */
        /* padding: {Space above the element} {} {Down} 26px; */
        padding: 1.2em 22em 20px 20px;
    }
</style>
