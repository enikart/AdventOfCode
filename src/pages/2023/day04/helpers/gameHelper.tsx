import {ICard, ICards} from "../interfaces/cardsStructureInterfaces";

export function parseCards(inputParsed: string[]): ICards
{
    let cardParsed: string[] = [];
    let cards: ICards = [];
    let card: ICard;
    let isHaving: boolean = false;

    inputParsed.forEach(cardLine => {
        cardParsed = cardLine.split(' ').filter((value) => { return value !== ''}).splice(2);
        isHaving = false;
        card = {
            having: [],
            winning: [],
            copies: 1
        }

        cardParsed.forEach(cardValue => {
            if (cardValue === '|') {
                isHaving = true;
                return;
            }

            if (isHaving) {
                card.having.push(parseInt(cardValue));
            } else {
                card.winning.push(parseInt(cardValue));
            }
        });
        cards.push(card);
    });

    return cards;
}