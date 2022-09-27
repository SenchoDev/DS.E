import React from 'react'
import ReactDOM  from 'react-dom/client'
import '@ds.e/scss/lib/Text.css'
import '@ds.e/scss/lib/Margin.css'

import { Text, Margin } from '@ds.e/react'

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

root.render(
  <div>
  <Margin>
   <Text size="xl">Text</Text>
  </Margin>
  </div>
 ,
)