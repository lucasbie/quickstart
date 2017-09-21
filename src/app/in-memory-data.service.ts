import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero' },
      { id: 11, name: "Mr. Nice" },
      { id: 12, name: "Oliver Queen" },
      { id: 13, name: "Lucas Bonitão" },
      { id: 14, name: "Guilherme Chefao" },
      { id: 15, name: "Bombasto" },
      { id: 16, name: "Celeristas" },
      { id: 17, name: "Magneta" },
      { id: 18, name: "RubberMan" },
      { id: 19, name: "Dynama" },
      { id: 20, name: "Tornado" }
    ];
    return { heroes };
  }
}