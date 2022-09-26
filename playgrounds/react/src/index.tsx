import React from 'react'
import ReactDOM  from 'react-dom/client'
import '@ds.e/scss/lib/Button.css'

import { Button } from '@ds.e/react/lib/index'

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

root.render(
  <Button label='Example Button'/>,
)