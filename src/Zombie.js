import { Character } from './index.js';

export default class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level, 40, 10);
  }
};

const Shon = new Zombie('Shon', 'Zombie');
void Shon;