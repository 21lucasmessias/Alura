export const throttle = (time = 500) => (
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    let timer = 0

    descriptor.value = (...args: any[]) => {
      if(event) event.preventDefault();
      
      clearInterval(timer)
      timer = setTimeout(() => originalMethod.apply(this, args), time)      
    }

    return descriptor
  }
)