const Backdrop = ({ children }) => (
  <div className='fixed flex items-center justify-center bg-[#000000b0] h-full top-0 w-full z-50 backdrop-blur-sm'>
    <section className='bg-white p-5 rounded-lg w-modal'>{children}</section>
  </div>
)

export default Backdrop
