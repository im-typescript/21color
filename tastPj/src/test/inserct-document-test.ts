import { connect } from '../mongodb/connect';

const insertDocumentTest = async () => {
  let connection, cursor;
  try {
    connection = await connect();
    const db = await connection.db('ch12-2');
    const personsCollction = db.collection('person');
    const addressCollection = db.collection('addresses');
    
    const person = {name: 'Jack', age: 32};
    let result = await personsCollction.insertOne(person)
    console.log(result);

    const addresses ={country: 'korea', city: 'seoul'};
    result = await addressCollection.insertOne(addresses);
    console.log(result);
  } catch(e) {
    console.log(e)
  } finally {
    connection?.close()
  }
}

insertDocumentTest()