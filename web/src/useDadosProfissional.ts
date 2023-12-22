import IProfissional from "./types/IProfissional";
import useFetch from "./useFetch";

const useDadosProfisional = () => {
    return useFetch<IProfissional[]>({url: 'especialista'})
}

export default useDadosProfisional