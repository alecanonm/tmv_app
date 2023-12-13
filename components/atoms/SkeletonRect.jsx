const SkeletonRect = ({ width, height, ratio, className }) => (
  <div
    className={`custom-skeleton ${className}`}
    style={{ width, height, borderRadius: ratio }}
  />
)

export default SkeletonRect
