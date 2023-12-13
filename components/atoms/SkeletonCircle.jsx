const SkeletonCircle = ({ children, size, className = '' }) => (
  <div
    className={`custom-skeleton rounded-full ${className}`}
    style={{ width: size, height: size }}
  >
    {children}
  </div>
)

export default SkeletonCircle
