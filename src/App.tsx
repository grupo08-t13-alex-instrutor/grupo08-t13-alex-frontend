import GlobalStyle from './globalStyled'
import { ThemeProvider } from 'styled-components';
import theme from './themeProvider';
import { Cards, Header } from './components';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header/>
        <ul >
          <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEoM818AD-kqjm1GfBoLh-3349D6Fno0DHA&usqp=CAU"
            marca="Mercedez"
            descricao="Descrição do carro"
            km="100.000 km"
            name="aiasm"
            ano="2020"
            preco="R$ 50.000,00" />
            
          <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEoM818AD-kqjm1GfBoLh-3349D6Fno0DHA&usqp=CAU"
            marca="Mercedez"
            descricao="Descrição do carro"
            km="100.000 km"
            name="aiasm"
            ano="2020"
            preco="R$ 50.000,00" />

          <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEoM818AD-kqjm1GfBoLh-3349D6Fno0DHA&usqp=CAU"
            marca="Mercedez"
            descricao="Descrição do carro"
            km="100.000 km"
            name="aiasm"
            ano="2020"
            preco="R$ 50.000,00" />
        </ul>

      </ThemeProvider>
    </>
  )

}

export default App
