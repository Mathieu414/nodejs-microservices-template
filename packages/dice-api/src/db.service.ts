import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private mockDb: Roll[] = [];

  async addRoll(roll: Roll) {
    await this.delay();
    this.mockDb.push(roll);
    this.mockDb.sort((a, b) => a.timestamp - b.timestamp);
  }

  async getLastRolls(max: number, sides: number) {
    await this.delay();
    return this.mockDb.filter((roll) => roll.sides === sides).slice(-max);
  }

  private async delay() {
    return new Promise((resolve) => setTimeout(resolve, 10));
  }
}

export interface Roll {
  sides: number;
  result: number;
  timestamp: number;
}
