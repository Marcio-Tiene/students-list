import { Injectable } from '@nestjs/common';

@Injectable()
export class CpfValidatorService {
  isValidCPF(cpf: string) {
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (
      !cpf ||
      cpf.length != 11 ||
      !Array.from(cpf).filter((e) => e !== cpf[0]).length
    ) {
      return false;
    }
    let sums = 0;
    let resto: number;
    for (let i = 1; i <= 9; i++)
      sums = sums + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (sums * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    sums = 0;
    for (let i = 1; i <= 10; i++)
      sums = sums + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (sums * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
}
