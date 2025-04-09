import type Card from "../modules/card.ts";

export default class Manager {
	#container: HTMLDivElement;
	#cards: Card[];

	constructor(container: HTMLDivElement, cards: Card[]) {
		this.#container = container;
		this.#cards = cards;

		for (const card of this.#cards) {
			this.#container.appendChild(card.element);
		}
	}
}
