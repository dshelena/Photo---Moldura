# Photo Booth - Aniversario Jardim Encantado

Aplicativo de Photo Booth para festa de aniversario com tema "Jardim Encantado".

## Funcionalidades

- Captura de foto com moldura decorativa
- Upload automatico para Google Drive
- Compartilhamento via WhatsApp e redes sociais
- Galeria de fotos salvas

## Como usar

1. Abra `index.html` no navegador (HTTPS necessario para camera)
2. Permita o acesso a camera
3. Tire a foto - ela salva automaticamente no Drive

## Hospedagem (GitHub Pages)

1. Crie um repositorio no GitHub
2. Faca push deste codigo
3. Ative GitHub Pages (Settings > Pages > Source: main)
4. Acesse via `https://SEU-USUARIO.github.io/REPOSITORIO/`

## Configuracao

- `APPSCRIPT_URL` em `index.html` - URL do Google Apps Script
- `appscript.gs` - Codigo do Apps Script (deploy no Google Apps Script Editor)

## Estrutura

```
index.html        - App principal (HTML + CSS + JS)
appscript.gs      - Backend Google Apps Script
assets/           - Imagens (moldura.png)
```
