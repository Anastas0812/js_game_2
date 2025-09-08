import { Character } from './index.js';

export default class Bowman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level, 25, 25);
  }
};

const Deadshot = new Bowman('deadshot', 'Bowman', 200, 5);
void Deadshot;