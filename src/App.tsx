import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfisional from './useDadosProfissional';

function App() {
  const {dados: consultas, erro: consultasErro} = useDadosConsulta()
  const {dados: profissionais, erro: profissionalErro} = useDadosProfisional()

  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar Especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultas}/>
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico  profissionais={profissionais} consultas={consultas}/>
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais}/>
      </Container>
      <Rodape/>
    </> 
  );
}

export default App;
