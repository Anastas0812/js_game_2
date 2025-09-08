import { Character } from './index.js';

export default class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level, 10, 40);
  }
};

const Dambldor = new Magician('dambldor', 'Magician', 700, 7, 20, 50);
void Dambldor;