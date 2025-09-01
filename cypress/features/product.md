# ✅ Validação da Tela de Produtos

### Exibição inicial de produtos ✅
**PASSOS**
- Estar logado e acessar `/inventory.html`
**RESULTADOS**
- Lista com 6 produtos visível
- Cada card exibe imagem, nome, preço e botão “ADD TO CART”

---

### Adicionar item ao carrinho ✅
**PASSOS**
- Clicar em **ADD TO CART** de um produto
**RESULTADOS**
- Botão muda para **REMOVE**
- Badge do carrinho = 1

---
 
### Remover item do carrinho ✅
**PASSOS**
- Clicar em **REMOVE** no mesmo card
**RESULTADOS**
- Botão volta para **ADD TO CART**
- Badge do carrinho desaparece (ou decrementa)

---

### Adicionar múltiplos itens e validar contador ✅
**PASSOS**
- Adicionar 3 produtos distintos
**RESULTADOS**
- Badge do carrinho = 3
- Os 3 cards mostram **REMOVE**

---

### Ir para o carrinho pelo ícone do header ✅
**PASSOS**
- Com itens no carrinho, clicar no ícone do carrinho
**RESULTADOS**
- Redireciona para `/cart.html`
- Itens adicionados aparecem listados

---

### Ordenação por nome (A → Z) ✅
**PASSOS**
- Selecionar no dropdown **Name (A to Z)**
**RESULTADOS**
- Produtos ordenados alfabeticamente ascendente

---

### Ordenação por preço (Low → High) ✅
**PASSOS**
- Selecionar **Price (low to high)**
**RESULTADOS**
- Produtos ordenados por preço crescente

---

### Reset App State limpa o carrinho ✅
**PASSOS**
- Adicionar itens
- Abrir menu lateral
- Clicar em **Reset App State**
**RESULTADOS**
- Badge do carrinho some
- Todos os botões voltam para **ADD TO CART**
