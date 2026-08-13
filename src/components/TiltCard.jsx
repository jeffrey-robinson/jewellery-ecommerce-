import useTilt from '../hooks/useTilt.js'

/**
 * TiltCard — wraps children in a real cursor-tracking 3D tilt + glare sheen.
 * Used for the premium Necklace / Kada / Chain Bracelet showcase cards.
 * Falls back to a static card on touch devices (see @media(hover:none) in index.css).
 */
export default function TiltCard({ as: Tag = 'div', className = '', max = 8, children, ...rest }) {
  const { ref, onMouseMove, onMouseEnter, onMouseLeave } = useTilt({ max })

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`tilt-card tilt-idle ${className}`}
      {...rest}
    >
      <span className="tilt-glare rounded-[inherit]" aria-hidden="true" />
      {children}
    </Tag>
  )
}
