import { IoRank } from '@app/types/io';

export function numberToRank(number: number): IoRank | undefined {
  switch (number) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case 6:
      return 6;
    case 8:
      return 8;
    case 9:
      return 9;
    case 10:
      return 10;
    case 12:
      return 12;
    case 14:
      return 14;
    case 15:
      return 15;
    case 16:
      return 16;
    case 20:
      return 20;
    case 25:
      return 25;
    default:
      return undefined;
  }
}
