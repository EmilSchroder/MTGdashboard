# MTGdashboard

This dashboard is designed to give you some basic stats around the makeup of your 'Magic: The Gathering' deck.

Looking to include: 
> Pie graph of colour makeup
> Bar graph of creature makeup
> Track of expected land drops over time
> Mana curve
> Save your decks

## Important properties of cards
```
card = {
    name: string,
    image: string,
    quantity: number,
    color: string,
    supertypes: array of strings
    types: array of strings,
    subtypes: array of strings
}
```

## Important properties of decks
```
deck = {
    deckName: string,
    deckImage: string,
    description: string,
    cards: array of objects
}
```

