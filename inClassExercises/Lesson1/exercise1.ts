// TODO: write a type
// TODO: write an interface

type Person = {
    (name: string,
    age: number,
    isProgrammer?: boolean)
    : string
  };
  
  const getDataString: Person = (name, age, isProgrammer) => {
    const fullAge = isProgrammer
      ? age + 100
      : age;
  
    return `${name}: ${fullAge}.`;
  };
  
  // TODO: add all types into the function
  function getDataString2(name: string, age: number, isProgrammer: boolean): string {
    const fullAge = isProgrammer
      ? age + 100
      : age;
  
    return `${name}: ${fullAge}.`;
  };
  
  // TODO: uncomment and fill the gaps
  const name = 'Bruno';
  const age = 31;
  const isProgrammer = true;
  
  console.log(getDataString(name, age, isProgrammer));
  console.log(getDataString2(name, age, isProgrammer));
  console.log(getDataString(name, age));
  