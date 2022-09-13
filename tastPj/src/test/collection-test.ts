import {connect} from '../mongodb/connect';

const makeCollectionTest = async() => {
  let connection;
  try {
    connection = await connect(); 
    const db = await connection.db('ch12-2');
    const personsCollction = db.collection('person');
    const addressCollection = db.collection('addresses');
    console.log(personsCollction, addressCollection);
  } catch(e) {
    console.log(e);
  } finally {
    connection?.close()
  }
}

makeCollectionTest();