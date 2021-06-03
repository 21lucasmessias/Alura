import { Printable } from "../../models/types/index";

export function printer(...args: Array<Printable>) {
  args.forEach(it => it.toConsole())
}