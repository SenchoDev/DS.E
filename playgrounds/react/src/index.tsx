import React from 'react'
import ReactDOM  from 'react-dom/client'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'
import '@ds.e/scss/lib/Select.css'

import { Select } from '@ds.e/react'

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

const options = [{
  label: 'Strict Black',
  value: 'strict-black'
}, {
  label: 'Heavenly Green',
  value: 'heavenly-green'
}, {
  label: 'Sweet Pink',
  value: 'pink'
}]

root.render(
  <div style={{ padding: '40px' }}>
    <Select options={options}  />
  </div>
 ,
)