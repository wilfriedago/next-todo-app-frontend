import { type ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return <button className="bg-slate-950 text-white py-3 px-4 text-sm font-medium rounded-full w-full hover:cursor-pointer hover:bg-slate-800 active:bg-slate-900">{children}</button>;
}
