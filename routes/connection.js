const Mongoose = require('mongoose');

const connectDB = async () => {
  try {
    /* cara 1 */
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      ssl: true,
      replicaSet: "atlas-goja61-shard-0",
      authSource: process.env.DB_USER,
      retryWrites: true,
      w: "majority"
    };
    const conn = await mongoose.connect(process.env.DB_URI, options);
    console.log('MongoDB Connected on Host : ' + conn.connection.host);   
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
