# 🧪 Cypress E2E Testing

Este repositório contém uma suíte de testes automatizados end-to-end (E2E) utilizando [Cypress](https://www.cypress.io/) com suporte a TypeScript e boas práticas de arquitetura moderna. A aplicação testada é a [Swag Labs](https://www.saucedemo.com/v1/).

## 📁 Estrutura do Projeto

```
cypress/
├── features/           → Documentações Markdown dos cenários testados
├── fixtures/           → Massa de dados (usuários, produtos, etc)
├── specs/              → Arquivos de testes (specs) escritos em Cypress
├── support/
│   ├── components/     → Page Components reutilizáveis (ex: Header, Sidebar)
│   ├── pages/          → Page Objects organizados por tela (ex: LoginPage)
│   └── utils/          → Utilitários auxiliares (ex: geração de dados fake)
```

## ⚙️ Stack Utilizada

- **[Cypress 15.x](https://docs.cypress.io/)**
- **[TypeScript 5.x](https://www.typescriptlang.org/)**
- **[Faker](https://fakerjs.dev/)** (`@faker-js/faker`) para dados randômicos
- **[dotenv](https://www.npmjs.com/package/dotenv)** para variáveis de ambiente
- **GitHub Actions** para CI/CD (workflow incluído em `.github/workflows/ci.yml`)

## 🛠️ Ferramentas complementares:

- **Agente de IA aplicado** Cursor para auxílio no desenvolvimento do código
- **Documentação MD** para padronização desde README

## 🚀 Como Executar o Projeto

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente**
   Crie um arquivo `.env` na raiz com o seguinte conteúdo:

   ```env
   BASE_URL=https://www.saucedemo.com/v1
   PASSWORD=
   ```

3. **Executar testes no modo interativo**
   ```bash
   npx cypress open
   ```

4. **Executar testes no modo headless (CI)**
   ```bash
   npx cypress run
   ```

---

## 🧠 Boas Práticas Adotadas

- Padrão **Page Object Model (POM)** com responsabilidade clara por página  
- **Componentização** de elementos reutilizáveis (navbar, sidebar etc)  
- **Fixtures organizadas** com estrutura de objetos reutilizáveis  
- **Separação por domínio funcional** nos testes 
- **Specs com nomes claros e bem documentadas**  
- Todos os seletores são acessados via Page Object (nenhum seletor direto nos testes)  

---

## 🛠️ Comandos Úteis

```bash
npm run cy:open   # abre o Cypress em modo gráfico
npm run cy:run    # executa os testes em headless
```

---

## 🤝 Como Contribuir

```bash
# 1. Fork o repositório
# 2. Crie uma branch:
git checkout -b minha-feature

# 3. Faça suas alterações
# 4. Commit:
git commit -m 'feat: minha nova feature'

# 5. Push:
git push origin minha-feature

# 6. Abra um Pull Request
```

---

## 📄 Bibliotecas Utilizadas

| Biblioteca         | Finalidade                                |
|--------------------|--------------------------------------------|
| Cypress            | Framework de testes end-to-end             |
| TypeScript         | Tipagem estática para melhor manutenção    |
| Faker              | Geração de dados randômicos para os testes |
| Dotenv             | Carregamento de variáveis de ambiente      |

---

## 👨‍💻 Autor

**Iago Benevides**  
Projeto desenvolvido para testes automatizados da aplicação Swag Labs.
