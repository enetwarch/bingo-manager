export default class Card {
	#element: HTMLDivElement;

	constructor() {
		this.#element = Card.create();
	}

	public get element(): HTMLDivElement {
		return this.#element;
	}

	private static create(): HTMLDivElement {
		const card = document.createElement("div");
		card.classList.add("bingo__card");

		const bingoInterface = document.createElement("div");
		bingoInterface.classList.add("bingo__interface");

		const icons = ["fa-trash", "fa-pen-to-square"];
		for (const icon of icons) {
			const interfaceIcon = document.createElement("i");
			interfaceIcon.classList.add("bingo__interface-icon", "fa-solid", icon);

			bingoInterface.appendChild(interfaceIcon);
		}

		const title = document.createElement("div");
		title.classList.add("bingo__title");

		const bingo = ["B", "I", "N", "G", "O"];
		for (const letter of bingo) {
			const header = document.createElement("div");
			header.classList.add("bingo__header");
			header.innerText = letter;

			title.appendChild(header);
		}

		const grid = document.createElement("div");
		grid.classList.add("bingo__grid");

		const defaultNumbers = [
			[1, 2, 3, 4, 5],
			[16, 17, 18, 19, 20],
			[31, 32, "FREE", 34, 35],
			[46, 47, 48, 49, 50],
			[61, 62, 63, 64, 65],
		];

		for (const numbers of defaultNumbers) {
			const column = document.createElement("div");
			column.classList.add("bingo__column");

			for (const number of numbers) {
				const cell = document.createElement("div");
				cell.classList.add("bingo__cell");

				if (number === "FREE") {
					cell.classList.add("bingo__cell--center");
				} else {
					cell.innerText = number.toString();
				}

				column.appendChild(cell);
			}

			grid.appendChild(column);
		}

		card.append(bingoInterface, title, grid);
		return card;
	}
}
