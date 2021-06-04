import React from 'react';
import {AppContainer} from "./styles"
import { Column} from "./Column"
import { Card } from "./Card"



const App =() =>{
  return(
    <AppContainer>
      <Column text="To do">
        <Card text="Gererate app scaffold"/>
      </Column>
      
      <Column text="In Progresso">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text=" Begin to use static typing"/>
      </Column>
      

    </AppContainer>
  )

}
export default App;
