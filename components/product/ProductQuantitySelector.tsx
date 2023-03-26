import { ActionIcon, Group, NumberInput, rem } from '@mantine/core'
import { useCounter } from '@mantine/hooks'
import React, { FC } from 'react'
import { Minus, Plus } from 'tabler-icons-react'

type Props = {
  onQuantityChange: (quantity: number) => any
  max: number
}

const ProductQuantitySelector: FC<Props> = ({ onQuantityChange, max }) => {
  const [count, handlers] = useCounter(1, { min: 1, max })
  function handleChange(type: 'INC' | 'DEC') {
    if (type === 'INC') {
      onQuantityChange(count + 1)
      handlers.increment()
    }
    if (type === 'DEC') {
      onQuantityChange(count - 1)
      handlers.decrement()
    }
  }
  return (
    <Group spacing={5}>
      <ActionIcon size={42} variant='default' onClick={() => handleChange('DEC')}>
        <Minus size={18} />
      </ActionIcon>

      <NumberInput size='md' hideControls value={count} max={max} min={0} step={1} styles={{ input: { width: rem(54), textAlign: 'center' } }} />

      <ActionIcon size={42} variant='default' onClick={() => handleChange('INC')}>
        <Plus size={18} />
      </ActionIcon>
    </Group>
  )
}

export default ProductQuantitySelector
