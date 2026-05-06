# 📱 Aplicativo Mobile com React Native (Expo)

## 📌 Contexto

Este projeto teve como ponto de partida um template utilizado em aula na FIAP, servindo como base para explorar conceitos essenciais de desenvolvimento mobile com React Native e Expo.

A partir dessa estrutura inicial, foram realizadas diversas adaptações com foco em melhorar a experiência do usuário, organização do código e comportamento da interface.

---

## 🎯 Propósito

Desenvolver uma aplicação mobile com múltiplas telas, aplicando boas práticas de navegação e refinando a usabilidade com melhorias inspiradas em cenários reais de desenvolvimento.

---

## 🧰 Tecnologias

- React Native  
- Expo (SDK 54)  
- React Navigation  

---

## ▶️ Executando o Projeto

### 1. Clonar o repositório

git clone https://github.com/LuizCamilo-Mobile/FIAP-Project-Mobile-Example.git

### 2. Entrar na pasta do projeto

cd fiap-auth-app

### 3. Instalar dependências

npm install

### 4. Iniciar a aplicação

npx expo start

---

## 📂 Organização de Pastas

src/
  components/
  navigation/
    AppNavigator.js
  screens/
    LoginScreen.js
    RegisterScreen.js
    ForgotPasswordScreen.js
    HomeScreen.js

---

## 🔄 Navegação entre Telas

- Login → Home  
- Login → Cadastro  
- Login → Recuperação de senha  
- Cadastro → Retorno ao Login  
- Recuperação → Retorno ao Login  
- Home → Logout (volta para Login)  

---

## ✨ Ajustes e Melhorias

### 💵 Exibição de Valores
- Formatação de preços no padrão brasileiro (R$)  
- Melhor legibilidade  

### 📱 Comportamento do Teclado
- Correção de sobreposição  
- Melhor usabilidade em telas menores  

### 💾 Manutenção de Estado
- Preservação de dados entre telas  
- Evita perda de informações  

### 📜 Scroll Ajustado
- Correção de rolagem  
- Acesso garantido a todos os campos  

---

## 🧠 Aprendizados

- Componentes básicos (View, Text, TextInput)  
- Estilização com StyleSheet  
- Uso de TouchableOpacity  
- Navegação com Stack Navigator  
- Gerenciamento de estado  
- UX e responsividade  

---

## 🛠️ Correção Aplicada

Problema:
expected dynamic type 'boolean', but had type 'string'

Solução:
npm install react-native-screens@4.16.0 --save-exact

---

## 📌 Considerações

O projeto evoluiu de um modelo educacional para uma aplicação com melhorias práticas, refletindo situações reais do desenvolvimento mobile.

---

## 👨‍💻 Créditos

Base original: Professor Luiz Camilo  
Customizações: Pietro Vitor Pezzente  
