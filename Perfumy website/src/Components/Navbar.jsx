function Navbar() {
  return (
    <nav className='flex justify-between p-3 bg-black text-white items-center'>
      <h1 className='font-extrabold text-3xl'>Perfumy</h1>
      <ul className='flex justify-between gap-2.5'>
        <li className='hover:font-extrabold cursor-pointer'>Home</li>
        <li className='hover:font-extrabold cursor-pointer'>AboutUs</li>
        <li className='hover:font-extrabold cursor-pointer'>Products</li>
        <li className='hover:font-extrabold cursor-pointer'>Contacts</li>
      </ul>
    </nav>
  )
}
export default Navbar