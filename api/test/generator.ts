import * as faker from 'faker';
import { Student } from 'src/modules/students/entities/student.entity';
import * as uuid from 'uuid';
const randomCpfTerm = (): string => {
  const randomTerm = Math.floor(Math.random() * 999);
  return `${randomTerm}`.padStart(3, '0');
};

const digits = (n1: string, n2: string, n3: string, n4?: string): string => {
  const nums = n1.split('').concat(n2.split(''), n3.split(''));
  if (!!n4) {
    nums[9] = n4;
  }

  let x = 0;
  for (let i = !!n4 ? 11 : 10, j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }

  const y = x % 11;
  return y < 2 ? '0' : `${11 - y}`;
};

export const generateRandoCpf = (): string => {
  const firstTerm = randomCpfTerm();
  const secontTerm = randomCpfTerm();
  const thirdTerm = randomCpfTerm();
  const firstDigit = digits(firstTerm, secontTerm, thirdTerm, undefined);
  const secondDigit = digits(firstTerm, secontTerm, thirdTerm, firstDigit);
  return `${firstTerm}${secontTerm}${thirdTerm}${firstDigit}${secondDigit}`;
};

const randomDate = () => new Date(Math.random() * Math.pow(10, 12));

export const generateRandomStudentsDb = (number: number): Student[] =>
  new Array(number).fill(1).map(() => ({
    id: uuid.v1(),
    email: faker.internet.email().toLowerCase(),
    name: faker.name.findName(),
    cpf: generateRandoCpf(),
    created_at: randomDate(),
    updated_at: randomDate(),
  }));
