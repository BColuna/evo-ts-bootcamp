// TODO: write a type for obj

type PersonTuple = [name: string, age: number]

type ObjectType = {
    id: string;
    timestamp: number;
    setTimeout: (handler: () => void, timeout?: number) => number;

    nextId?: string;
    people?: PersonTuple[];
  }
  
  const obj: ObjectType = {
    id: 'id_1',
    timestamp: Date.now(),
    setTimeout: window.setTimeout,
  };
  
  obj.nextId = 'id_2';
  
  obj.people = [['Dima', 12], ['Dimon', 38], ['Dimas', 99]];
  obj.people.push(['Dimka', 20]);
  