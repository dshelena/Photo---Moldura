function doPost(e) {
  try {
    const dados = JSON.parse(e.postData.contents);
    const imagemBase64 = dados.imagem;
    const nomeArquivo = dados.nome;

    const base64Limpo = imagemBase64.replace("data:image/png;base64,", "");

    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64Limpo),
      "image/png",
      nomeArquivo
    );

    const pasta = DriveApp.getFolderById("11FoZ84e4BcNLMWL4ie7ZnQQzJqdWYYkD");
    const arquivo = pasta.createFile(blob);
    arquivo.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const link = "https://drive.google.com/file/d/" + arquivo.getId() + "/view";

    return ContentService.createTextOutput(JSON.stringify({
      status: "ok",
      link: link,
      id: arquivo.getId()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (erro) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "erro",
      mensagem: erro.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
