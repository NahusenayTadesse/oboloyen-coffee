export function random1To11(): number {
		return Math.floor(Math.random() * 11) + 1;
	}

export const toastmsg = `fixed right-4 bottom-20 lg:bottom-4 z-50
             flex items-center gap-3
             bg-green-600 text-white font-medium 
             px-5 py-3 rounded-xl shadow-lg
             animate-slide-in`
  export const errormsg = `${toastmsg} !bg-red-600`;