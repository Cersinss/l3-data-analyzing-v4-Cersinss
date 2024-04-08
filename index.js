import _ from 'lodash';

const showInfo = (str) => {
  const lines = str.trim().split('\n').slice(1);
  const data = lines.map((line) => line.split(','));
  console.log(`Количество автомобилей: ${lines.length}`); // 1шаг

  const mileage = data.map((row) => Number(row[4])); // 2шаг

  const summ = mileage.reduce((acc, autoProb) => acc + autoProb, 0);
  const { length } = mileage;
  const output = sum / length;
  console.log(`Средний пробег: ${output}`);
  const price = data.map((row) => row[7]);
  const maxxSum = Math.max.apply(null, price);
  console.log(`Стоимость самой дорогой машины: ${maxSum}`); // 3шаг

  const noFam = data.map((row) => ({ brand: row[0], model: row[1], god: Number(row[2]) }));
  const avto = noFam.reduce((min, car) => (car.god < min.god ? car : min));
  console.log(`Самый старый автомобиль: ${avto.brand} ${avto.model}`); // 4шаг
};

export default showInfo;