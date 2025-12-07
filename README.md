# 🌤️ Condições de Tempo

<img width="1642" height="800" alt="image" src="https://github.com/user-attachments/assets/3c941c39-450a-4ce4-8637-3e18fc98f288" />

Este projeto é uma aplicação web desenvolvida para consultar as condições climáticas de diferentes localidades em tempo real. O objetivo principal é fornecer uma interface simples e intuitiva para verificar informações de temperatura.

---

## 🚀 Funcionalidades

- **Busca por Localidade:** Permite ao usuário pesquisar o clima de uma cidade específica.
- **Dados em Tempo Real:** Integração com API de clima para fornecer dados atualizados.
- **Interface Responsiva:** Layout adaptável para diferentes tamanhos de tela (Desktop e Mobile).
- **Exibição de Detalhes:** Mostra temperatura, descrição do clima e outros dados relevantes.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[TypeScript](https://www.typescriptlang.org/):** Para garantir tipagem estática e um código mais robusto.
- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML):** Estrutura semântica da aplicação.
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Estilização e layout.
- **[API de Clima](https://openweathermap.org/api)** para requisição dos dados meteorológicos.

---

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto está organizada da seguinte forma:

```bash
condicoes-de-tempo/
├── css/             # Arquivos de estilo (CSS)
├── js/              # Arquivos JavaScript compilados
├── ts/              # Código fonte em TypeScript
├── index.html       # Página principal
├── package.json     # Gerenciamento de dependências e scripts
├── tsconfig.json    # Configurações do compilador TypeScript
└── ...
```

## ⚙️ Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (para gerenciamento de pacotes e compilação do TypeScript)

Um editor de código, como o VSCode

🔧 Instalação e Execução
Siga os passos abaixo para rodar o projeto localmente:

Clone o repositório:

```bash
git clone [https://github.com/naisamelo/condicoes-de-tempo.git](https://github.com/naisamelo/condicoes-de-tempo.git)
```
Acesse a pasta do projeto:

```bash
cd condicoes-de-tempo
```
Instale as dependências:

```bash
npm install
```

## 🔑 Configuração da API

Para que o projeto funcione corretamente e busque os dados climáticos, você precisará de sua própria chave de API (API Key). Siga os passos abaixo:

1. **Crie uma conta:**
   Acesse o site [OpenWeatherMap](https://openweathermap.org/) e crie uma conta gratuita.

2. **Gere a chave:**
   Após fazer login, vá até o seu perfil e clique na aba **"My API Keys"**. Lá você encontrará uma chave padrão gerada ou poderá criar uma nova.

3. **Configure no projeto:**
   - Copie a sua API Key.
   - Abra o arquivo `ts/index.ts` (ou o arquivo onde a URL é montada).
   - Localize a variável responsável pela chave (geralmente algo como `const apiKey = '...'`).
   - Cole sua chave neste local.

   > **Nota:** A ativação da chave pode levar de 10 minutos a algumas horas após a criação no site da OpenWeatherMap.

Compilação (TypeScript): Caso faça alterações nos arquivos .ts, compile para JavaScript rodando:

```bash
npx tsc
```
Ou utilize o script de build configurado no package.json.

Rodando o projeto: Abra o arquivo index.html diretamente no seu navegador ou utilize uma extensão como o "Live Server" no VSCode.

🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias ou correções, sinta-se à vontade para:

Fazer um Fork do projeto

Criar uma Branch para sua Feature (git checkout -b feature/NovaFeature)

Fazer o Commit (git commit -m 'Adicionando nova feature')

Fazer o Push (git push origin feature/NovaFeature)

Abrir um Pull Request

📝 Licença
Este projeto está sob a licença MIT.

Feito com 💜 por Naisa Melo
