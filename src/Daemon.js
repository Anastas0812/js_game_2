import { Character } from './index.js';

export default class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level, 10, 40);
  }
};

const CoulTurner = new Daemon('Coul', 'Daemon');
void CoulTurner;