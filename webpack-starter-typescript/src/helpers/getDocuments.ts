import firebase from 'firebase';
export const getDocuments = (snap: firebase.firestore.QuerySnapshot) => {

    const documents: any = [];

    snap.forEach( snapHijo => {
        documents.push({
            id: snapHijo.id,
            ...snapHijo.data(),
        });
    });
    console.log(documents);
    return documents;
}



// JON MIRCHA
// FERNANDO
// MIDU
// JUAN