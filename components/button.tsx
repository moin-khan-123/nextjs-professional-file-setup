/**
 * Button Component
 *
 * A flexible, reusable button component with multiple variants and sizes.
 * - Supports 6 visual variants: default, destructive, outline, secondary, ghost, link
 * - Supports 4 sizes: default, sm, lg, icon
 * - Fully accessible with focus indicators and disabled states
 * - Uses forwardRef for external ref attachment
 * - Merges custom className via cn() utility for Tailwind flexibility
 *
 * @component
 * @example
 * <Button variant="default" size="lg">Click Me</Button>
 * <Button variant="destructive">Delete</Button>
 * <Button variant="ghost" size="sm">Cancel</Button>
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * ButtonProps interface extending native button HTML attributes
 * @property {string} variant - Visual style variant
 * @property {string} size - Button size preset
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

/**
 * Button component with variant and size support
 * @param {ButtonProps} props - Button props
 * @param {React.Ref} ref - Forwarded ref for external button control
 * @returns {JSX.Element} Styled button element
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles applied to all variants
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          // Variant-specific styles
          {
            'bg-primary text-primary-foreground hover:bg-primary/90':
              variant === 'default',
            'bg-destructive text-destructive-foreground hover:bg-destructive/90':
              variant === 'destructive',
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground':
              variant === 'outline',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'text-primary underline-offset-4 hover:underline':
              variant === 'link',
          },
          // Size-specific styles
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          // Allow custom className override
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
