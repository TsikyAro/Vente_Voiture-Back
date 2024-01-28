import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Caractéristique ',
  },
  {
    component: CNavGroup,
    name: 'Caracteristique Voiture',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Insertion Model',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Insertion Marque',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Insertion Categorie',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Commission',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Insertion Comission',
        to: '/forms/form-control',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Annonce',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Validation Annonce',
        to: '/forms/validation',
      },
    ],
  },
]

export default _nav
