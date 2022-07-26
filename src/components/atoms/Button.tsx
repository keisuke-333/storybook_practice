import { FC, ReactNode } from 'react'

export type Props = {
  children: ReactNode
  variant: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-full py-2 px-4 font-bold text-white transition-colors ${
        variant === 'primary'
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-pink-600 hover:bg-pink-700'
      }`}
    >
      {children}
    </button>
  )
}
