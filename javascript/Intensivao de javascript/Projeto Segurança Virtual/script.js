function verificarEntrada() {
    nomeConvidado = document.getElementById('nome').value;
    convidadoThiago = ['Lucas', 'Sisleide', 'Amanda', 'Ana', 'Beatriz', 'Lisca']

if (convidadoThiago.includes(nomeConvidado)) {
    document.getElementById('permissaoEntrada').innerText = 'Voce pode entrar'
} else {
    document.getElementById('permissaoEntrada').innerText = 'Voce NÂO pode entrar'
    }
}