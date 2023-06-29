import { Calendar, User } from 'lucide-react'

export default function Home() {
  return (
    <div className="mx-auto h-screen max-w-[720px]">
      <div className="my-auto mt-5 justify-start">
        <h1 className="text-3xl font-bold text-white-100">
          Como utilizar Hooks
        </h1>
        <p className="text-1xl mb-3 text-white-200">
          Pensando em sincronização em vez de ciclos de vida.
        </p>
        <div className="top-20 flex gap-1">
          <Calendar className="h-4 w-4" />
          <span className="text-[14px] text-white-300">15 Mar 2021</span>
          <User className="ml-4 h-4 w-4" />
          <span className="text-[14px] text-white-300">Joseph Oliveira</span>
        </div>
      </div>

      <div className="my-auto mt-5 justify-start">
        <h1 className="text-3xl font-bold text-white-100">
          Como utilizar Hooks
        </h1>
        <p className="text-1xl mb-3 text-white-200">
          Pensando em sincronização em vez de ciclos de vida.
        </p>
        <div className="top-20 flex gap-1">
          <Calendar className="h-4 w-4" />
          <span className="text-[14px] text-white-300">15 Mar 2021</span>
          <User className="ml-4 h-4 w-4" />
          <span className="text-[14px] text-white-300">Joseph Oliveira</span>
        </div>
      </div>

      <div className="my-auto mt-5 justify-start">
        <h1 className="text-3xl font-bold text-white-100">
          Como utilizar Hooks
        </h1>
        <p className="text-1xl mb-3 text-white-200">
          Pensando em sincronização em vez de ciclos de vida.
        </p>
        <div className="top-20 flex gap-1">
          <Calendar className="h-4 w-4" />
          <span className="text-[14px] text-white-300">15 Mar 2021</span>
          <User className="ml-4 h-4 w-4" />
          <span className="text-[14px] text-white-300">Joseph Oliveira</span>
        </div>
      </div>
    </div>
  )
}
