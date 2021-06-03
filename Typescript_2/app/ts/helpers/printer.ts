import { Printable } from "../models/index";

export function printer(...args: Array<Printable>) {
  args.forEach(it => it.toConsole())
}