# 📱 Projeto React Native (Expo)

## 📚 Base do Projeto

Este projeto foi desenvolvido a partir de um template utilizado em aula na FIAP, com o objetivo de praticar conceitos fundamentais de **React Native com Expo**.

A partir dessa base inicial, foram implementadas melhorias focadas em **usabilidade, experiência do usuário e ajustes de comportamento da aplicação**.

---

# 🎯 Objetivo do Projeto

Criar uma aplicação mobile com navegação entre telas e aprimorar sua usabilidade através de melhorias práticas, simulando situações reais de desenvolvimento.

---

# 🧱 Tecnologias Utilizadas

* React Native
* Expo (SDK 54)
* React Navigation

---

# 🚀 Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/LuizCamilo-Mobile/FIAP-Project-Mobile-Example.git
```

## 2. Acessar a pasta

```bash
cd fiap-auth-app
```

## 3. Instalar dependências

```bash
npm install
```

## 4. Rodar o projeto

```bash
npx expo start
```

---

# 📁 Estrutura do Projeto

```text
src/
  components/
  navigation/
    AppNavigator.js
  screens/
    LoginScreen.js
    RegisterScreen.js
    ForgotPasswordScreen.js
    HomeScreen.js
```

---

# 🧭 Fluxo de Navegação

* Login → Home
* Login → Cadastro
* Login → Recuperação de Senha
* Cadastro → Voltar
* Recuperação → Voltar
* Home → Login

---

# ✨ Melhorias Implementadas

Durante o desenvolvimento, foram aplicadas melhorias importantes em relação ao projeto original:

### 💰 Melhoria 1: Formatação de Preço

* Implementação de formatação no padrão brasileiro (R$)
* Melhor leitura e padronização de valores monetários

---

### ⌨️ Melhoria 2: Ajuste do Teclado em Telas Pequenas

* Correção do problema onde o teclado sobrepunha campos
* Melhor experiência de digitação em dispositivos menores

---

### 💾 Melhoria 3: Persistência de Dados

* Preservação das informações do produto ao retornar do leitor de código de barras
* Evita perda de dados durante a navegação

---

### 📜 Melhoria 4: Ajuste de Rolagem

* Correção do comportamento de scroll em telas menores
* Garantia de acesso a todos os campos da interface

---

# 🧠 Conceitos Trabalhados

* Componentes básicos (`View`, `Text`, `TextInput`)
* Estilização com `StyleSheet`
* Uso de `TouchableOpacity`
* Navegação com Stack (`React Navigation`)
* Gerenciamento de estado básico
* Experiência do usuário (UX)
* Ajustes de responsividade

---

# 🛠️ Problemas Resolvidos

### Erro: "expected dynamic type 'boolean', but had type 'string'"

Solução:

```bash
npm install react-native-screens@4.16.0 --save-exact
```
---

# 🗣️ Observação

Este projeto começou como base educacional e foi evoluído com melhorias práticas, demonstrando a aplicação de boas práticas de desenvolvimento mobile.

---

# 👨‍💻 Autor
Professor: Luiz Camilo

Aprimorado por: Pietro Vitor Pezzente
