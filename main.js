const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if (livros.includes(livroProcurado)) {
    console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
    console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}