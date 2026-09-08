# 💲 Target
O Target é um aplicativo mobile de gerenciamento de metas financeiras inspirado no funcionamento das "Caixinhas do Nubank". Ele permite que o usuário crie objetivos de economia personalizados, acompanhe a evolução do valor guardado através de barras de progresso dinâmicas e registre transações de depósito e resgate com persistência de dados local.
---

## 🚀 Funcionalidades
- Gestão de Metas (Caixinhas): Criar e visualizar metas financeiras com cálculo automático de progresso e porcentagem atingida.
- Histórico de Transações: Registrar entradas (guardar dinheiro) e saídas (resgatar dinheiro) atreladas a uma meta específica.
- Persistência Local (Offline First): Banco de dados local via SQLite com migrações automáticas de tabela e suporte a chaves estrangeiras (ON DELETE CASCADE).
- Interface Fluida: Navegação nativa baseada em arquivos com Expo Router e suporte a fontes customizadas.

---

## 🛠️ Tecnologias Utilizadas
- **Framework**: React Native com Expo (SDK 52)
- **Linguagem**: TypeScript
- **Roteamento**: Expo Router
- **Banco de Dados**: expo-sqlite
- **Estilização e UI**: Expo Linear Gradient, React Native Currency Input, Google Fonts (Inter)
- **Utilitários**: Day.js

---

## 📌 Pré-requisitos
- Antes de começar, você precisará ter instalado em sua máquina:
- Node.js (versão LTS recomendada)
- JDK 17 (para compilação nativa Android)
- Android Studio configurado com um emulador (AVD) ou um dispositivo físico com depuração USB habilitada
---

##  🔧 Configuração e Instalação
```bash
1. Clone o repositório:
  git clone https://github.com/seu-usuario/target.git
  cd target

2. Instale as dependências:
  npm install

3. Gere os arquivos nativos (Prebuild):
  npx expo prebuild

```
---

## 📱 Executando a Aplicação
🤖**Android**
```bash
Inicie o emulador Android ou conecte o dispositivo físico e execute:

Com um emulador Android configurado:

npx expo run:android
```

🍎 **iOS**
(Requer macOS e Xcode instalado)
```bash
  npx expo run:android
```
---

## 🗄️ Estrutura do Banco de Dados
O aplicativo utiliza duas tabelas relacionais via SQLite:

targets: Armazena as metas criadas (nome, valor objetivo e timestamps).

transactions: Armazena os aportes/retiradas vinculados a cada meta (target_id).

---

## 👩‍💻 Autora

Erika Perciliano

Projeto desenvolvido para estudo e prática de desenvolvimento mobile com React Native e Expo.

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório!


## 📸 Screenshots 


<p align="center">
  <img
    src="https://github.com/user-attachments/assets/2c855f3c-26a1-42dd-933f-715cc82376e4"
    alt="Home Page"
    width="250"
  />
  <img
    src="https://github.com/user-attachments/assets/84b760de-b7c6-4ef6-94a9-e7c276271c48"
    alt="Tela de Detalhes"
    width="250"
  />
  <img
    src="https://github.com/user-attachments/assets/04594957-55fd-4483-b211-732a47dee5c0"
    alt="Nova Meta"
    width="250"
  />
  <img
    src="https://github.com/user-attachments/assets/9e205749-281d-44fe-b0ff-700b92824201"
    alt="Edição"
    width="250"
  />
  <img
    src="https://github.com/user-attachments/assets/2fd6e0d6-9fb1-4b25-8748-62f8b280dafb"
    alt="Exclusão"
    width="250"
  />
   <img
    src="https://github.com/user-attachments/assets/a6435e98-507b-4f8a-be32-84443476228b"
    alt="Nova Transação"
    width="250"
  />
</p>
