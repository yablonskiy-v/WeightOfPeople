function greedyPartitionEqualWeight(people) {
  // Сортування людей за спаданням ваги
  people.sort((a, b) => b.weight - a.weight);

  // Загальна вага всіх людей
  const totalWeight = people.reduce((sum, p) => sum + p.weight, 0);

  // Цільова вага для першої групи
  const targetWeight1 = 18;

  // Ініціалізація груп
  const group1 = [];
  const group2 = [];

  // Перевірка можливості розбиття
  if (totalWeight - targetWeight1 < 0) {
    throw new Error("Неможливо розбити групу з заданими параметрами");
  }

  // Додавання Alice і Bob до першої групи
  group1.push(people[0]);
  group1.push(people[1]);

  // Додавання решти людей до другої групи
  for (let i = 2; i < people.length; i++) {
    group2.push(people[i]);
  }

  // Виведення результату
  console.log("**Група 1:**");
  for (const person of group1) {
    console.log(`- ${person.name} (${person.weight})`);
  }

  console.log("**Загальна вага:**", group1.reduce((sum, p) => sum + p.weight, 0));

  console.log("**Група 2:**");
  for (const person of group2) {
    console.log(`- ${person.name} (${person.weight})`);
  }

  console.log("**Загальна вага:**", group2.reduce((sum, p) => sum + p.weight, 0));

  console.log(`**Загальна різниця в вазі:** ${Math.abs(group1.reduce((sum, p) => sum + p.weight, 0) - group2.reduce((sum, p) => sum + p.weight, 0))} `);
}

const people = [
  { name: "Alice", weight: 10 },
  { name: "Bob", weight: 8 },
  { name: "Carol", weight: 6 },
  { name: "Dave", weight: 4 },
  { name: "Eve", weight: 7 },
];

greedyPartitionEqualWeight(people);
