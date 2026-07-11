import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'



const Sidebar = () => {
  return (
   <div className='w-1/3 min-w-[250px] md:w-[320px] border-r border-orange-500/10 p-4 flex flex-col'> 
<SearchInput />
<div className='divider px-3'></div>
<Conversations />
<LogoutButton />

    </div>
  )
}

export default Sidebar



//starter code
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'



// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
// <SearchInput />
// <div className='divider px-3'></div>
// <Conversations />
// <LogoutButton />

//     </div>
//   )
// }

// export default Sidebar

