import db from './firebase/config';
import { getDocuments } from './helpers/getDocuments';

const usuario = {
    nombre: 'sandra',
    activo: true, 
    fechaNaci: 0,
    salario: 2500,
}

const usuariosRef = db.collection('usuarios');

// 10 Limit y Paginacion

//limit
// usuariosRef.limit(1)
//     .get().then( getDocuments)

//logica para hacer paginacion
    //1. guardar la referencia al ultimo doc traido
    //2. traer los documentos limitados ej. limit(2) apartie del ult doc traido
    //3. guardar la referencia del nuevo ultimo doc traido

const btnPrevious = document.createElement('button');
btnPrevious.innerText = 'Previous Page'
document.body.append(btnPrevious);

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let lastDocument: any = null;
let firstDocument: any = null; 

btnNext.addEventListener('click', () => {
    const query = usuariosRef
                    .orderBy('nombre')
                    .startAfter(lastDocument) //if null lo ignora
    
    query.limit(1).get().then( snap => {
        firstDocument = snap.docs[0] || null
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        getDocuments(snap);
    })

});

btnPrevious.addEventListener('click', () => {
    const query = usuariosRef
                    .orderBy('nombre')
                    .endBefore(firstDocument)
                
    query.limitToLast(1).get().then( snap => {
        firstDocument = snap.docs[0] || null
        lastDocument = snap.docs[snap.docs.length - 1] || null
        getDocuments(snap);
    })
})

btnNext.click();



