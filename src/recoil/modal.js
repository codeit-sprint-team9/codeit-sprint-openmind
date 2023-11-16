import { atom } from 'recoil'

export const modalState = atom({
  key: 'modal',
  default: {
    postModal: {
      display: false,
    },
    optionModal: {
      id: -1,
      display: false,
    },
  },
})
