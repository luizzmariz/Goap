import {actions} from './actions'
import {Npc} from './npc'
import {State} from './state'

const state: State = {
  hasSword: true,
  hasShield: false,
  hasBow: false,
  hasSpell: true,
  hasNoGold: true,
  has1Gold: false,
  has2Gold: false,
  holdingGold: false,
  defeatedZuku: false,
  defeatedPolimeris: false,
  defeatedNula: false,
  defeatedPrimo: false,
  defeatedGiorno: false,
  defeatedZus: false, 
  becameTheChampion: false,
}

const goal: State = {
  becameTheChampion: true,
}

const challenger = new Npc(state, actions)
challenger.goal = goal

console.log(challenger.state)

while (challenger.plan.length > 0) {
  challenger.execute()
}

console.log(challenger.state)
