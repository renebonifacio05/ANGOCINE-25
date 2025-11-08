// sessao.js
document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"));

  // Verifica se existe usuário logado e se a sessão ainda é válida
  if (!usuario || Date.now() > usuario.expiraEm) {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "index.html"; // redireciona para a tela de login
  }
});

// Função para salvar usuário no sessionStorage com duração de 2 horas
function salvarUsuarioSessao(email) {
  const duasHoras = 2 * 60 * 60 * 1000; // 2 horas em milissegundos
  const usuario = {
    email: email,
    expiraEm: Date.now() + duasHoras
  };
  sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario));
}