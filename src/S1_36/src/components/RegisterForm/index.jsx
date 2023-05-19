export const RegisterForm = ({ getInfo }) => {
  const register = (event) => {
    const form = event.target;
    if (form.checkValidity()) {
      event.preventDefault();
      const registerInfo = {
        description: form.description.value,
        value: Number(form.value.value),
        category: form.category.value,
      };
      form.description.value = "";
      form.value.value = "";
      form.category.value = "";
      getInfo(registerInfo);
    }
  };

  return (
    <form onSubmit={register}>
      <fieldset>
        <label className="text2" htmlFor="description">
          Descrição
        </label>
        <input
          className="text1"
          type="text"
          name="description"
          placeholder="Digite aqui sua descrição"
          required
        />
        <small className="text2">Ex:Compra de roupas</small>
        <label className="text2" htmlFor="value">
          Valor(R$)
        </label>
        <input
          className="text1"
          type="number"
          step="any"
          name="value"
          placeholder="Digite o valor"
          min="0"
          required
        />
        <label className="text2" htmlFor="category">
          Tipo de valor
        </label>
        <select className="text1" name="category" id="" required>
          <option value="">Selecione uma categoria</option>
          <option value="+">Entrada</option>
          <option value="-">Despesa</option>
        </select>
        <button>Inserir Valor</button>
      </fieldset>
    </form>
  );
};
