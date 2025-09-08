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
  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж мёртв. Повысить level невозможно'); 
    }
    this.health = 100;
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    return 'levelUp done';
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100)
    }
    return `oops, ${this.name}, получил урон -${points}!`
  }
}
