import {State} from './state'

export interface Action {
  name: string
  precond: State
  effects: State
  cost: number
}

//lets change this to a run of a godFighter --inspired by hades and hollow knight

const pickShield: Action = {
  name: 'pick the Shield',
  precond: {
    hasShield: false,
  },
  effects: {
    hasShield: true,
    hasSword: false,
    hasBow: false,
  },
  cost: 1,
}

const pickSword: Action = {
  name: 'pick the Sword',
  precond: {
    hasSword: false,
  },
  effects: {
    hasShield: false,
    hasSword: true,
    hasBow: false,
  },
  cost: 1,
}

const pickBow: Action = {
  name: 'pick the Bow',
  precond: {
    hasBow: false,
  },
  effects: {
    hasShield: false,
    hasSword: false,
    hasBow: true,
  },
  cost: 1,
}

const fightZuku: Action = {
  name: 'fight Zuku',
  precond: {
    hasSword: true,
    defeatedZuku: false,
    hasSpell: false,
  },
  effects: {
    defeatedZuku: true,
    holdingGold: true,
    hasSpell: true,
  },
  cost: 2,
}

const fightPolimeris: Action = {
  name: 'fight Polimeris',
  precond: {
    hasBow: true,
    defeatedPolimeris: false,
  },
  effects: {
    defeatedPolimeris: true,
    holdingGold: true,
  },
  cost: 3,
}

const fightNula: Action = {
  name: 'fight Nula',
  precond: {
    hasShield: true,
    defeatedNula: false,
  },
  effects: {
    defeatedNula: true,
    holdingGold: true,
  },
  cost: 3,
}

const fightPrimo: Action = {
  name: 'fight Primo',
  precond: {
    hasSword: true,
    defeatedNula: true,
    defeatedPrimo: false,
  },
  effects: {
    defeatedPrimo: true,
    holdingGold: true,
  },
  cost: 4,
}

const fightGiorno: Action = {
  name: 'fight Giorno',
  precond: {
    hasSword: true,
    defeatedPolimeris: true,
    defeatedGiorno: false,
  },
  effects: {
    defeatedGiorno: true,
    holdingGold: true,
  },
  cost: 4,
}

const zeroToOne: Action = {
  name: 'has 1 gold',
  precond: {
    hasNoGold: true,
    holdingGold: true,
    has1Gold: false,
  },
  effects: {
    has1Gold: true,
    holdingGold: false,
  },
  cost: 1,
}

const oneToTwo: Action = {
  name: 'has 2 gold',
  precond: {
    has1Gold: true,
    holdingGold: true,
    has2Gold: false,
  },
  effects: {
    has2Gold: true,
    holdingGold: false,
  },
  cost: 1,
}

const buySpell: Action = {
  name: 'buy spell',
  precond: {
    has2Gold: true,
    hasSpell: false,
  },
  effects: {
    hasSpell: true,
    has2Gold: false,
  },
  cost: 2,
}

const fightZus: Action = {
  name: 'fight Zus',
  precond: {
    defeatedPrimo: true,
    defeatedGiorno: true,
    hasSpell: true,
    defeatedZus: false,
  },
  effects: {
    defeatedZus: true,
  },
  cost: 5,
}

const becomeChampion: Action = {
  name: 'become the Champion',
  precond: {
    defeatedPrimo: true,
    defeatedGiorno: true,
    defeatedZus: true,
    becameTheChampion: false,
  },
  effects: {
    becameTheChampion: true,
  },
  cost: 1,
}

export const actions = [
  pickShield,
  pickSword,
  pickBow,
  fightZuku,
  fightPolimeris,
  fightNula,
  fightPrimo,
  fightGiorno,
  zeroToOne,
  oneToTwo,
  buySpell,
  fightZus,
  becomeChampion,
]
