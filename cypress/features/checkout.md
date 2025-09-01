# ✅ Validação do Fluxo de Compras

---

### Realizar fluxo de compras completo ✅
**PASSOS**
- Estar logado com usuário válido  
- Adicionar um produto ao carrinho  
- Acessar a página do carrinho  
- Clicar em **Checkout**  
- Preencher `First Name`, `Last Name` e `Zip/Postal Code` com dados válidos  
- Clicar em **Continue**  
- Verificar resumo do pedido  
- Clicar em **Finish**

**RESULTADOS**
- Redireciona para `/checkout-complete.html`  
- Mensagem `THANK YOU FOR YOUR ORDER` visível  
- Carrinho esvaziado  

---

### Tentar prosseguir sem preencher nenhum campo ✅
**PASSOS**
- Estar na tela de checkout `/checkout-step-one.html`  
- Não preencher nenhum campo  
- Clicar em **Continue**

**RESULTADOS**
- Mensagem exibida: `Error: First Name is required`  
- Permanece na mesma página  

---

### Tentar prosseguir preenchendo apenas o nome ✅
**PASSOS**
- Estar na tela de checkout `/checkout-step-one.html`  
- Preencher apenas o campo `First Name`  
- Clicar em **Continue**

**RESULTADOS**
- Mensagem exibida: `Error: Last Name is required`  
- Permanece na mesma página  

---

### Tentar prosseguir sem preencher código postal ✅
**PASSOS**
- Estar na tela de checkout `/checkout-step-one.html`  
- Preencher `First Name` e `Last Name`  
- Deixar o campo `Zip/Postal Code` vazio  
- Clicar em **Continue**

**RESULTADOS**
- Mensagem exibida: `Error: Postal Code is required`  
- Permanece na mesma página  
