import PropTypes from 'prop-types'
import React from 'react'
import {  CTabContent, CTabPane } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilCode, cilMediaPlay } from '@coreui/icons'

const DocsExample = (props) => {
  const { children} = props

  // const _href = `https://coreui.io/react/docs/${href}`

  return (
    <div className="example">
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default React.memo(DocsExample)
