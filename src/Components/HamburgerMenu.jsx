// HamburgerMenu.jsx

export default function HamburgerMenu() {
    return (
      <div>
        <button className="group relative laptop:hidden">
          <div className="relative flex h-8 w-8  transform items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-200 hover:ring-1 group-focus:ring-1 ring-green-light">
            <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-evenly overflow-hidden transition-all duration-300">
              <div className="h-[2px] w-7 origin-left transform bg-green-light transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="h-[2px] w-7 transform rounded bg-green-light transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
              <div className="h-[2px] w-7 origin-left transform bg-green-light transition-all delay-150 duration-300 group-focus:translate-x-10"></div>

              <div className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
                <div className="absolute h-[2px] w-5 rotate-0 transform bg-green-light transition-all delay-300 duration-500 group-focus:rotate-45"></div>
                <div className="absolute h-[2px] w-5 -rotate-0 transform bg-green-light transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
}