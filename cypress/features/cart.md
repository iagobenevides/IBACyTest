# ✅ Validação da Tela de Carrinho

## Cenário: Renderizar item adicionado corretamente no carrinho ✅
**Pré-condição:** Usuário autenticado  
**Passos:**
1. Adicionar um item aleatório ao carrinho
2. Acessar a tela de carrinho
3. Validar:
   - Nome do produto
   - Preço do produto
   - Quantidade exibida
**Resultado esperado:** O produto deve estar presente com nome, preço e quantidade corretos.

---

## Cenário: Remover item diretamente pelo carrinho ✅
**Pré-condição:** Usuário autenticado com item no carrinho  
**Passos:**
1. Adicionar um item ao carrinho
2. Acessar o carrinho
3. Clicar em "Remove"
**Resultado esperado:** O carrinho deve ficar vazio (nenhum item visível)

---

## Cenário: Voltar para a loja ao clicar em "Continue Shopping" ✅
**Pré-condição:** Usuário autenticado e com acesso ao carrinho  
**Passos:**
1. Acessar o carrinho
2. Clicar em "Continue Shopping"
**Resultado esperado:** Usuário é redirecionado para a tela de produtos (`/inventory.html`)

---

## Cenário: Prosseguir para checkout ✅
**Pré-condição:** Usuário autenticado e com item no carrinho  
**Passos:**
1. Acessar o carrinho com pelo menos um item
2. Clicar em "Checkout"
**Resultado esperado:** Usuário é redirecionado para `/checkout-step-one.html`
