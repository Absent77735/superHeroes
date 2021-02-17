const heroData = [
	{
		name: "Superman",
		realName: "Clark Kent",
		originDescription: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction… ",
		superpowers: ["solar energy absorption and healing factor",
			"solar flare and heat vision", "solar invulnerability", "flight…"],
		catchPhrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
		image: "https://klike.net/uploads/posts/2019-03/1551427673_23.jpg"
	}
];

function heroSection(hero) {
	return (
		<div class="hero-box">
			<img src="${hero.image}" />
			<h2>${hero.name}
				<span class="hero-real-name">(${hero.realName})</span>
			</h2>
			<p><strong>Created by:</strong>
			${hero.originDescription}</p>
			<p><strong>Catch phrase:</strong>
			${hero.catchPhrase}</p>
			<p><strong>Base of operations:</strong>
			${hero.baseOfOperations}</p>
		${hero.superpowers ? superpowers(hero.superpowers) : ""}
		${skillsAndAbilities(hero.skillsAndAbilities)}
		</div>
	);
}

function superpowers(superpower) {
	return (
		<div>
			<h3>Superpowers</h3>
			<ul>
				${superpower.map(function (superpower) { return (<li>${superpower}</li>) }).join("")}
			</ul>
		</div>
	);
}

function skillsAndAbilities(originDescriptions) {
	return (
		<div>
			<h3> Origin descriptions</h3>
			<ul>
				${originDescriptions.map(function (originDescriptions) {
				return (<li>${originDescriptions}</li>)
			}).join("")}
			</ul>
		</div>
	);
}

document.getElementById('main').innerHTML = (
	<div>
		<h1>Superheroes</h1>
	${heroData.map(heroSection).join("")}
	</div>
);