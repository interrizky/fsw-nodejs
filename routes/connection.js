const Mongoose = require('mongoose');

const connectDB = async () => {
  try {
    /* cara 1 */
    const Conn = await Mongoose.connect(
      'mongodb://admin:root123@learn-shard-00-00.eedrt.mongodb.net:27017,learn-shard-00-01.eedrt.mongodb.net:27017,learn-shard-00-02.eedrt.mongodb.net:27017/Learn?ssl=true&replicaSet=atlas-goja61-shard-0&authSource=admin&retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    console.log('MongoDB connected : ' +Conn.connection.host)    
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB