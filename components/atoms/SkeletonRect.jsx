const SkeletonRect = ({ children, width, height, ratio, className = '' }) => (
  <div
    className={`custom-skeleton ${className}`}
    style={{ width, height, borderRadius: ratio }}
  >
    {children}
  </div>
)

export default SkeletonRect
