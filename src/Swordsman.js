import { Character } from './index.js';

export default class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level, 40, 10);
  }
};

const Polly = new Swordsman('Polly', 'Swordsman');
void Polly;