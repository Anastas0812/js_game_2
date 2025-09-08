import { Character } from '../index.js';
import Bowman from '../Bowman.js';
import Daemon from '../Daemon.js';
import Magician from '../Magician.js';
import Swordsman from '../Swordsman.js';
import Undead from '../Undead.js';
import Zombie from '../Zombie.js';

test('проверка на строку у name', () => {
  expect(() => {
    new Character(122, 'Bowman');
  }).toThrow('Имя должно быть строкой.');
});

test('тест геттера name', () => {
  const result = new Zombie('Rick', 'Zombie');
  expect(result.name).toBe('Rick');
});

test('тест геттера type', () => {
  const result = new Undead('Bella', 'Undead');
  expect(result.type).toBe('Undead');
});

test('короткое name', () => {
  expect(() => {
    new Bowman('B', 'Bowman');
  }).toThrow('Имя слишком короткое. Длина имени должна быть больше 2 символов (но меньше 10)');
});

test('длинное имя', () => {
  expect(() => {
    new Swordsman('Antonio Banderos', 'Swordsman');
  }).toThrow('Имя слишком длинное. Длина имени должна быть больше 2 символов (но меньше 10)');
});

test('проверка на строку у type', () => {
  expect(() => {
    new Magician('Gendalf', 4444);
  }).toThrow('Тип должен быть строкой.');
});

test('проверка несуществующего типа', () => {
  expect(() => {
    new Daemon('Angry', 'RedHorns');
  }).toThrow('Такого типа персонажа не существует.');
});

const testCases = [
  {
    Class: Bowman,
    name: 'Robin',
    type: 'Bowman',
    expectedAttack: 25,
    expectedDefence: 25,
  },
  {
    Class: Swordsman,
    name: 'Arthur',
    type: 'Swordsman',
    expectedAttack: 40,
    expectedDefence: 10,
  },
  {
    Class: Magician,
    name: 'Godjo',
    type: 'Magician',
    expectedAttack: 10,
    expectedDefence: 40,
  },
  {
    Class: Daemon,
    name: 'Mudzan',
    type: 'Daemon',
    expectedAttack: 10,
    expectedDefence: 40,
  },
  {
    Class: Undead,
    name: 'Vola',
    type: 'Undead',
    expectedAttack: 25,
    expectedDefence: 25,
  },
  {
    Class: Zombie,
    name: 'Flick',
    type: 'Zombie',
    expectedAttack: 40,
    expectedDefence: 10,
  }
];

testCases.forEach(({ Class, name, type, expectedAttack, expectedDefence }) => {
  test(`Проверка класса ${Class.name}`, () => {
    const character = new Class(name, type);
    expect(character.attack).toBe(expectedAttack);
    expect(character.defence).toBe(expectedDefence);
  });
});

test('levelUp здоровье > 0', () => {
  const Gendalf = new Magician('Gendalf', 'Magician', 30, 4, 10, 40);
  Gendalf.levelUp();
  expect(Gendalf.health).toBe(100);
  expect(Gendalf.level).toBe(5);
  expect(Gendalf.attack).toBe(12);
  expect(Gendalf.defence).toBe(48);
});

test('levelUp здоровье < 0', () => {
  expect(() => {
    new Magician('Gendalf', 'Magician', 0, 4, 10, 40).levelUp();
  }).toThrow('Персонаж мёртв. Повысить level невозможно');
});

test('damage здоровье > 0', () => {
  const Dambldor = new Magician('Dambldor', 'Magician', 30, 4, 10, 40);
  Dambldor.damage(10);
  expect(Dambldor.health).toBe(24);
});
