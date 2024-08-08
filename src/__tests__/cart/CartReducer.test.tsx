
import React, { use, useReducer } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { addToCartAction, drawerCartReducer, initialState, openCartAction } from '@/shared/store/cart/cartReducer'


const Wrapper = () => {
  const [state, dispatch] = useReducer(drawerCartReducer, initialState)

  return (
    <>
      {state.isOpen ? <div>Cart is open</div> : null}
      <p>current cart qtt: {state.items.length}</p>
      <button onClick={() => dispatch(openCartAction())}>
        Open Cart
      </button>
      <button onClick={
        () => dispatch(addToCartAction({
          id: 1,
          name: 'test',
          price: 100,
          quantity: 2
        }))
      }>
        Add item
      </button>
    </>
  )
}

it('should open the drawer state when firing the openCartAction', () => {
  const { getByText } = render(<Wrapper />)
  const increateButton = getByText('Add item')
  fireEvent.click(increateButton)
  expect(screen.getByText('Cart is open')).toBeInTheDocument()
})

it('should add an item to cart when firing addToCartAction', () => {
  const { getByText } = render(<Wrapper />)
  const increateButton = getByText('Add item')
  fireEvent.click(increateButton)
  expect(screen.getByText('current cart qtt: 1')).toBeInTheDocument()
})