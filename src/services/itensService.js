import itensApi from "../api/itensApi";

export default listarItens = () => {
    itensApi.get("api/Produtos").then(res => {
        return res;
    });
};

export const cadastrarItem = item => {
    return itensApi.post("api/Produtos", item);
};

export const deletarItem = itemIndex => {
    return itensApi.delete("api/Produtos/" + itemIndex);
};
