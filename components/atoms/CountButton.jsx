const CountButton = ({ color, children, onClick }) => (
  <button className={`w-12 rounded-lg ${color}`} onClick={onClick}>
    <span className='text-white font-bold'>{children}</span>
  </button>
)

export default CountButton
