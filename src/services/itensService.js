import itensApi from "../api/itensApi";

const listarItens = itensApi.get("api/Produtos").then(res => {
    return res;
});

const cadastrarItem = item => {
    return itensApi.post("api/Produtos", item);
};

const deletarItem = itemIndex => {
    return itensApi.delete("api/Produtos/" + itemIndex);
};

export { listarItens, cadastrarItem, deletarItem };
