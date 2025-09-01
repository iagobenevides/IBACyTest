# ✅ Validação da Tela de Login

### Login com usuário válido ✅
**PASSOS**
- Acessar a página de Login  
- Preencher `username` com `standard_user`  
- Preencher `password` válida  
- Clicar em **Login**  

**RESULTADOS**
- Redireciona para `/inventory.html`  
- URL contém `/inventory.html`  

---

### Login com usuário bloqueado ✅
**PASSOS**
- Acessar a página de Login  
- Preencher `username` com `locked_out_user`  
- Preencher `password` válida  
- Clicar em **Login**  

**RESULTADOS**
- Permanece na página de Login  
- Mensagem de erro indicando que o usuário está bloqueado  

---

### Login com senha inválida ✅
**PASSOS**
- Acessar a página de Login  
- Preencher `username` válido  
- Preencher `password` inválida  
- Clicar em **Login**  

**RESULTADOS**
- Permanece na página de Login  
- Mensagem de erro informando credenciais inválidas  

---

### Login sem preencher usuário ✅
**PASSOS**
- Acessar a página de Login  
- Deixar o campo `username` vazio  
- Preencher `password` válida  
- Clicar em **Login**  

**RESULTADOS**
- Mensagem exibida: “Username is required”  

---

### Login sem preencher senha ✅
**PASSOS**
- Acessar a página de Login  
- Preencher `username` válido  
- Deixar o campo `password` vazio  
- Clicar em **Login**  

**RESULTADOS**
- Mensagem exibida: “Password is required”  

### Logout com sucesso ✅
**PASSOS**
- Estar logado como usuário válido  
- Abrir o menu lateral   
- Clicar em **Logout**

**RESULTADOS**
- Redireciona para a página de Login 
- Botão **Login** visível