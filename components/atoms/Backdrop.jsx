const Backdrop = ({ children }) => (
  <div className='fixed flex items-center justify-center bg-[#000000c0] h-full top-0 w-full z-50 backdrop-blur-sm'>
    {children}
  </div>
)

export default Backdrop
