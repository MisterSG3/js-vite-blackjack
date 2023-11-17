
/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Solicita el arreglo del deck
 * @returns {String} Retorna la última carta del arreglo del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}