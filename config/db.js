const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://soinya:8TZ6ynCARyLGLg5L@cluster0.lgshf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
