const enumerable = (value: boolean) => {
  console.log(value)

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = value
  }
}

class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  /* eslint-disable */
  @enumerable(false)
  greet() {
    return 'Hello, ' + this.greeting
  }
}

const Decorators = () => {
  return 11
}
export default Decorators
