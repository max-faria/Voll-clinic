import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]:{
        color: "var(--azul-escuro)",
        fontSize: "18",
        fontWeight: "700",
        fontFamily: "var(--fonte-pricipal)"

    },
    [`&.${tableCellClasses.body}`]:{
        fontSize: "16",
        fontFamily: "var(--font-principal)",
    }
}))

const LinhaEstilizada = styled(TableRow)(()=> ({
    [`&:nth-of-type(odd)`]:{
        backgroundColor: "var(--cinza-claro)",
        align: "right",

    }
}))

function Tabela({consultas}: {consultas: IConsulta[] | null}) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <CelulaEstilizada>Data</CelulaEstilizada>
                            <CelulaEstilizada>Horário</CelulaEstilizada>
                            <CelulaEstilizada>Profissional</CelulaEstilizada>
                            <CelulaEstilizada>Especialidade</CelulaEstilizada>
                            <CelulaEstilizada>Paciente</CelulaEstilizada>
                            <CelulaEstilizada>Modalidade</CelulaEstilizada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                        <LinhaEstilizada>
                            <TableCell component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</TableCell>
                            <TableCell>{linha.horario}</TableCell>
                            <TableCell>{linha.profissional[0].nome}</TableCell>
                            <TableCell>{linha.profissional[0].especialidade}</TableCell>
                            <TableCell>{linha.paciente}</TableCell>
                            <TableCell>{linha.modalidade}</TableCell>
                        </LinhaEstilizada>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela