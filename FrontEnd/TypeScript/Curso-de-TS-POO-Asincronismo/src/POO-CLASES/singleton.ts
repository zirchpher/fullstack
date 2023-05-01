// Patrón de diseño Singleton
// Singleton es un patrón de diseño creacional que garantiza que tan solo exista un objeto de su tipo y proporciona un único punto de acceso a él para cualquier otro código.

class MyService {
    private static instance: MyService | null = null;

    // si hacemos el constructor privado, evitaremos que creen instancias distintas
    private constructor(private name: string) {}

    static create(name: string) {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name);
            return MyService.instance;
        } else {
            return MyService.instance;
        }
    }

    getName(): string {
        return this.name;
    }
}

const myService1 = MyService.create('servicio RAAAAAA');
console.log(myService1.getName());

const myService2 = MyService.create('servicio 2 muy serio');
console.log(myService2.getName());

const myService3 = MyService.create('servicio 3 extremadamente muy serio');
console.log(myService3.getName());

// Si esto da true, es porque las instacias son iguales, y por lo tanto es singleton
// Si da false es porque son instancias independientes y no son singleton
const areTheInstancesTheSame = myService1 === myService2;
console.log('¿Son las mismas instancias?: ', areTheInstancesTheSame);
