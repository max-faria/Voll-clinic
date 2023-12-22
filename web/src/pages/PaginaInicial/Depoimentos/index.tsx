import styled from "styled-components"

const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Titulo = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;
color: var(--azul-escuro);
margin-top: 100px;
`

const Texto = styled.p`
line-height: 19px;
color: var(--cinza);
width: 70%;
margin-bottom: 5px;
`

const Subtitulo = styled.h3`
line-height: 19px;
font-weight: 700;
color: var(--cinza-escuro);
text-align: center;
`

const Linha = styled.hr`
color: var(--cinza)`

export default function Depoimentos() {
    return (
        <>
        <Container>
            <Titulo>Depoimentos</Titulo>
            <Texto>Minha experiência com o consultório foi excepcional. Desde o primeiro contato até o acompanhamento pós-consulta, senti-me acolhido e bem cuidado. Os profissionais são atenciosos e extremamente competentes. Recomendo a todos que buscam um atendimento médico de qualidade.</Texto>
            <Subtitulo>João Antônio Moreira, 40 anos, São Paulo/SP.</Subtitulo>
            <Linha />
            <Texto>Fiquei impressionada com a tecnologia e a infraestrutura do consultório. Tudo é pensado para o conforto e bem-estar dos pacientes. A equipe médica é excelente, sempre pronta a ouvir e esclarecer todas as dúvidas. Minha saúde melhorou significativamente desde que comecei meu tratamento aqui.</Texto>
            <Subtitulo>Mariana Golçalves, 37 anos, Curitiba/SP.</Subtitulo>
            <Linha />
            <Texto>Encontrei neste consultório não apenas profissionais de saúde, mas verdadeiros parceiros na minha jornada de bem-estar. A atenção aos detalhes e o cuidado personalizado fazem toda a diferença. Agradeço a toda equipe pelo suporte incrível e recomendo fortemente a quem procura cuidados médicos de alto padrão.</Texto>
            <Subtitulo>Carlos Eduardo Martins, 34 anos, Campinas/SP.</Subtitulo>
            <Linha />
        </Container>
        </>
    )
}

export {}