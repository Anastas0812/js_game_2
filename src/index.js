export class Character {
  static heroTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

  constructor(name, type, health = 100, level = 1, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Имя должно быть строкой.');
    }
    if (value.length < 2) {
      throw new Error('Имя слишком короткое. Длина имени должна быть больше 2 символов (но меньше 10)');
    }
    if (value.length > 10) {
      throw new Error('Имя слишком длинное. Длина имени должна быть больше 2 символов (но меньше 10)');
    }
    this._name = value;
  }
  get type() {
    return this._type;
  }
  set type(value) {
    if (typeof value !== 'string') {
      throw new Error('Тип должен быть строкой.');
    }
    if (!Character.heroTypes.includes(value)) {
      throw new Error('Такого типа персонажа не существует.');
    }
    this._type = value;
  }
}

export class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = (attack !== undefined) ? attack : 25;
    this.defence = (defence !== undefined) ? defence : 25;
  }
};

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = (attack !== undefined) ? attack : 40;
    this.defence = (defence !== undefined) ? defence : 10;
  }
};

export class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = (attack !== undefined) ? attack : 10;
    this.defence = (defence !== undefined) ? defence : 40;
  }
};

export class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = (attack !== undefined) ? attack : 10;
    this.defence = (defence !== undefined) ? defence : 40;
  }
};

export class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = (attack !== undefined) ? attack : 25;
    this.defence = (defence !== undefined) ? defence : 25;
  }
};

export class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level);
    this.attack = (attack !== undefined) ? attack : 40;
    this.defence = (defence !== undefined) ? defence : 10;
  }
};


const Deadshot = new Bowman('deadshot', 'Bowman', 200, 5);
const Polly = new Swordsman('Polly', 'Swordsman');
const Dambldor = new Magician('dambldor', 'Magician', 700, 7, 20, 50);
const CoulTurner = new Daemon('Coul', 'Daemon');
const Azog = new Undead('Azog', 'Undead');
const Shon = new Zombie('Shon', 'Zombie');

// void для линта, чтобы не ругался 

void Dambldor;
void Deadshot;
void Polly;
void CoulTurner;
void Azog;
void Shon;
