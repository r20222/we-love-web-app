<footer>
    <section>
        <h3>Contact</h3>
        <a href="https://github.com/r20222" target="_blank">🐙 Github</a>
        <a href="https://www.linkedin.com/in/roelie-jansen/" target="_blank">💻 Linkedin</a>
    </section>
	
</footer>

<style>
	footer {
		background-color: var(--emerald);
		padding-top: 2rem;
		padding-bottom: 5rem;
		border-top: 3px solid black;
	}
    section{
        margin: 1rem 5vw;
    }
	h3 {
		margin-top: 0;

	}
	a {
		text-decoration: none;
		display: block;
		font-size: 1.5rem;
		padding: 1rem;
		color: black;
		margin-bottom:1rem;
		background-color: var(--pink);
		border: 3px solid black;
	}

	@media screen and (min-width: 1000px) {
		a {
			text-decoration: none;
			display: block;
			max-width: 30rem;
			font-size: 1.5rem;
			padding: 1rem;
			color: black;
			background-color: var(--pink);
			border: 3px solid black;
			transition: 0.1s;
            margin: 1rem 1rem;
		}
        h3{
            margin-left:1rem;
        }
		a:hover {
			scale: 1.05;
			transition: 0.1s;
		}
	}
</style>
