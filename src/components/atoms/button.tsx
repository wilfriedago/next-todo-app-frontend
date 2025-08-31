import { type ReactNode } from "react";

 function Button({ children }: { children: ReactNode }) {
  return <button className="rounded-5 text-white bg-slate-950  py-2 px-5 text-sm font-medium  w-full hover:cursor-pointer hover:bg-slate-800 active:bg-slate-900">{children}</button>
}

export default Button
