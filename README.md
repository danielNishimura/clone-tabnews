# cursodev

Projeto Next.js — documentação mínima.

## Como rodar (recomendado)
1. Instale e carregue o nvm (se não tiver):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# depois abra uma nova shell ou rode:
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

2. No diretório do projeto:

```bash
nvm install --lts=iron
nvm use lts/iron
npm install
npm run dev
```

## Documentação local
Para ver a documentação localmente:

```bash
npm run docs
```

## Próximos passos
- Automatizar carregamento do nvm no shell (~/.bashrc)
- Gerar documentação de componentes (Storybook / react-docgen)
- Migrar docs para Docusaurus ou MkDocs para documentação maior
