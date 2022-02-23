import db from './firebase/config';
import { getDocuments } from './helpers/getDocuments';

const usuario = {
    nombre: 'Simon',
    activo: true, 
    fechaNaci: 0,
}

const usuariosRef = db.collection('usuarios');

// 03 Insertar data en Firebase
// AGREGAR UN DOCUMENTO
// insert into usuarios... en sql
// db.collection('usuarios')
//     .add(usuario)
//     .then(docRef => console.log(docRef))
//     .catch(e => console.log('error', e));


// 04 Actualizar data en Firebase
// ACTUALIZAR UN DOCUMENTO
//update usuarios set activo = false where ... en sql
//actualizaa los campos enviados solamente, no reemplaza todo el documento
// usuariosRef
//     .doc('nvy5G1M7g5sbxjzYKy48')
//     .update({
//         activo: true,
//     });

// REEMPLAZAR UN DOCUMENTO
//destructivo, reemplaza el objeto enviado en el documento
// usuariosRef
//     .doc('nvy5G1M7g5sbxjzYKy48')
//     .set({
//         activo: true,
//         age: 4,
//     });


// 05 Borrar informacion en firestore
// delete from usuarios where id = 'xx'   en sql
// usuariosRef
//     .doc('kSiqkdDjmWoncTb6cW2y')
//     .delete()
//     .then(console.log)
//     .catch(console.log)


// 06 Seleccionar todos los registros de una coleccion
// select * from usuarios; en sql
//utilizando onSnapShot para que cuando se modifique algo en la base de datos, se vuelva a llamar la funcion. Comunicaion por sockets.
// usuariosRef
//     .onSnapshot( snap => {

//         const usuarios: any = [];

//         snap.forEach( snapHijo => {

//             usuarios.push({
//                 id: snapHijo.id,
//                 ...snapHijo.data(),
//             });
//         });

//         console.log(usuarios);
//     })


// 07 Optimizando el codigo

// con el metodo del socket io
// usuariosRef
//     .onSnapshot( getDocuments);

//solo recuperar los documentos sin tiempo real.
// usuariosRef
//     .get().then(getDocuments);


// 08 Indices y Clausula where

//select * from usuarios where activo = true
// usuariosRef
//     .where('activo', '==', true)
//     .get().then(getDocuments);

//select * from usuarios where salario > 1800
// usuariosRef
//     .where('salario', '>', 1800)
//     .get()
//     .then(getDocuments)

//consultas compuestas
//select * from usuarios where salario > 1800 and salario < 2300
// usuariosRef
// .where('salario', '>', 1800)
// .where('salario', '<', 2300)
// .get()
// .then(getDocuments)


//select * from usuarios where salario >= 1800 and activo < true
// en este tipo de consulta compuesta se debe crear un indice
usuariosRef
.where('salario', '>=', 1800)
.where('activo', '==', true)
.get()
.then(getDocuments)

