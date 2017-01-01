// import { INCREASE, DECREASE } from '../constants'

export function increase(n) {
  return {
    type: 'INCREASE',
    amount: 1
  }
}

export function decrease(n) {
  return {
    type: 'DECREASE',
    amount: 1
  }
}