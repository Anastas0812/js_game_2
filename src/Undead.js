import { Character } from './index.js';

export default class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level, 25, 25);
  }
};

const Azog = new Undead('Azog', 'Undead');
void Azog;