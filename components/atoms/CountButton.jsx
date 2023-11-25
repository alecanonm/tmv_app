const CountButton = ({ color, content, onClick }) => (
  <button className={`w-12 rounded-lg ${color}`} onClick={onClick}>
    <span className='text-white font-bold'>{content}</span>
  </button>
)

export default CountButton
