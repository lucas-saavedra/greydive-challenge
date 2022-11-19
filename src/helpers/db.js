import db from '../db/db.json';
let nameList = [];
/**
 * Creo una lista de objetos para recorrer más comodamente los nombres
 */
db.map((_, index) => nameList.push({ id: index + 1, name: `testeador-${index + 1}` }));
/**
 * 
 * @param {Number} index 
 * @returns item || undefined
 */
const getById = (index) => {
    return db.find((item, idx) => idx === index);
}
export { nameList, getById };
