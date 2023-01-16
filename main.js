const words = {
    adjectives: ['beautiful', 'tremendous', 'inspired', 'enermous', 'loud', 'dangerous', 'life-changing', 'small', 'far'],
    nouns: ['bee', 'bridge', 'vampire', 'chair', 'cart', 'horse', 'sword', 'yacht', 'debt'],
    verbs: ['tear', 'tremble', 'kick', 'float', 'speak', 'play', 'mount', 'race'],
    adverbs: ['too', 'objectively', 'freakly speaking', 'just', 'usually', 'somehow', 'willingly']
}

const getRandomAdjective = (arr) => {
    const adjective = words.adjectives[Math.floor(Math.random() * words.adjectives.length)]
    return adjective.charAt().toUpperCase() + adjective.slice(1,);
}

const getRandomNoun = (arr) => {
    return words.nouns[Math.floor(Math.random() * words.nouns.length)];
}

const getRandomVerb = (arr) => {
    return words.verbs[Math.floor(Math.random() * words.verbs.length)];
}

const getRandomAdverb = (arr) => {
    return words.adverbs[Math.floor(Math.random() * words.adverbs.length)];
}

const createRandomPhrase = () => {
    console.log(getRandomAdjective() + " " + getRandomNoun() + " " + getRandomVerb() + "s" + " " + getRandomAdverb());
}

const futureDay = () => {
    console.log(`Your day will be ${getRandomAdjective().toLowerCase()}`);
}

createRandomPhrase();
futureDay();
