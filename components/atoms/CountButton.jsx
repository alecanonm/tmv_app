const CountButton = ({ color, content }) => (
  <button className={`w-12 rounded-lg ${color}`}>
    <span className='text-white font-bold'>{content}</span>
  </button>
)

export default CountButton
