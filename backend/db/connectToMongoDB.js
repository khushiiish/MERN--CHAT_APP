import mongoose from "mongoose";
import dns from "dns";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB CONNECTED SUCCESSFULLY");
    } catch (error) {
        if (error.message.includes("querySrv ECONNREFUSED") || error.message.includes("ENOTFOUND")) {
            try {
                dns.setServers(["8.8.8.8", "8.8.4.4"]);
                await mongoose.connect(process.env.MONGO_DB_URI);
                console.log("MongoDB CONNECTED SUCCESSFULLY");
            } catch (retryError) {
                console.error("MongoDB Connection Failed:", retryError.message);
            }
        } else {
            console.error("MongoDB Connection Failed:", error.message);
        }
    }
};

export default connectToMongoDB;