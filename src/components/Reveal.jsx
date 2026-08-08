import React from 'react';
import useInView from '../hooks/useInView';

/**
 * Wraps children and animates them into view once when scrolled into the viewport.
 * variant: 'up' | 'fade' | 'scale' | 'left' | 'right'
 * delay: stagger delay in ms (applied via inline style so Tailwind purge is unaffected)
 */
export default function Reveal({ children, variant = 'up', delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isInView] = useInView();

  const hiddenStyles = {
    up: 'opacity-0 translate-y-8',
    fade: 'opacity-0',
    scale: 'opacity-0 scale-95',
    left: 'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8',
  };

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isInView ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : hiddenStyles[variant]
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
