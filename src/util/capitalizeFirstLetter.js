/*
    Capitaliza a primeira letra de uma palavra
*/
const capitalizaFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizaFirstLetter;
