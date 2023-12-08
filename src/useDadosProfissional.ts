import IProfissional from "./types/IProfissional";
import useFetch from "./useFetch";

const useDadosProfisional = () => {
    return useFetch<IProfissional[]>({url: 'profissionais'})
}

export default useDadosProfisional