import Link from "next/link";
import { Button } from "@/components/ui/button"

// @ts-ignore
export default function InitialHomePage({openOp, readyOp}) {
  return (
    <main className="flex flex-col items-center bg-zinc-900 text-white h-full md:h-screen md:pt-14">
      <div className="container flex flex-col md:flex-row items-center h-full">
        <div className="img-section flex-1 p-5 h-full">
          <img src="Images/login.png" alt="" />
        </div>

        <div className="login-section flex-1 p-5 h-full">
          <p className="flex justify-center">
            <img src="Images\logo.png" alt="" />
          </p>
          <p className="border-b border-slate-700 flex justify-center text-5xl p-8 font-bold text-rose-300">
            <span>Spend</span>
            <span className="p-1">
              {" "}
            </span>
            <span>Wise</span>
          </p>
          
          <div className="flex flex-col items-center p-5 w-full">
            <p className="w-3/5 flex flex-wrap text-center text-2xl p-2 font-bold">
              <span>Access your account effortlessly and securely!</span>
            </p>

            <p className="w-full mt-0 border-b border-slate-700"></p>
          </div>
          <p className="mt-10 w-full flex justify-center">
            <div>
              <Button variant="secondary" onClick={() => openOp()} disabled={!readyOp}>
                  Connect your bank account
              </Button>
            </div>
          </p>
        </div>
      </div>

    </main>
  );
}
