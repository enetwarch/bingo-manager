import "./styles/style.css";
import Manager from "./controllers/manager.ts";
import Card from "./modules/card.ts";

window.addEventListener("load", () => {
	const cards: Card[] = [];

	for (let i = 0; i < 4; i++) {
		cards.push(new Card());
	}

	const bingo = document.getElementById("bingo");
	if (!(bingo instanceof HTMLDivElement)) {
		throw Error("bingo element id should be a div.");
	}

	new Manager(bingo, cards);
});
