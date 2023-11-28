const express = require('express');
const multer = require('multer');
const File = require('../model/file');
const User=require("../model/user"); // Import the File model
const pdf = require("pdf-parse");
const mammoth = require("mammoth");



const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/files', async (req, res) => {
    try {
        const files = await File.find().sort({ uploadDate: -1 });
        res.json(files);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete("/files/:fileId", async (req, res) => {
    try {
        const { fileId } = req.params;
        console.log("Deleting file with ID:", fileId);


        // Use the MongoDB model to find and delete the file by its ID
        const deletedFile = await File.findByIdAndDelete(fileId);
        if (file)

            if (!deletedFile) {
                return res.status(404).json({ error: "File not found" });
            }

        res.status(204).send(); // Send a success response with no content (HTTP 204 No Content)
    } catch (error) {
        console.error("Error deleting file:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




router.post("/upload", upload.array("files"), async (req, res) => {
    try {
        const uploadedFiles = req.files;

        for (const file of uploadedFiles) {
            if (file.mimetype === "application/pdf") {
                console.log("inside this202")
                const dataBuffer = file.buffer;
                const data = await pdf(dataBuffer);
                const textContent = data.text;

                const newFile = new File({
                    filename: file.originalname,
                    textContent,
                    uploadDate: new Date(),
                });
                await newFile.save();
            } else if (file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                const text = await extractTextFromWord(file.buffer); // Call a function to extract text from Word file
                const newFile = new File({
                    filename: file.originalname,
                    textContent: text,
                    uploadDate: new Date(),
                });
                await newFile.save();
            }
            else if (file.mimetype === "text/plain") {
                console.log("inside this we ")
                // Handle .txt files
                const textContent = file.buffer.toString("utf-8");

                const newFile = new File({
                    filename: file.originalname,
                    textContent,
                    uploadDate: new Date(),
                });
                await newFile.save();
            }
        }

        res.status(200).json({ message: "Files uploaded and converted successfully" });
    } catch (error) {
        console.error("Error uploading and converting files:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.put("/files/:fileId", async (req, res) => {
    try {
      const { fileId } = req.params;
      const { textContent } = req.body;
  
      // Update the file's text content in the database
      const updatedFile = await File.findByIdAndUpdate(
        fileId,
        { textContent },
        { new: true } // Return the updated document
      );
  
      if (!updatedFile) {
        return res.status(404).json({ error: "File not found" });
      }
  
      res.status(200).json(updatedFile);
    } catch (error) {
      console.error("Error editing file:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


async function extractTextFromWord(fileBuffer) {
    return new Promise((resolve, reject) => {
        mammoth.extractRawText({ buffer: fileBuffer })
            .then(result => {
                resolve(result.value);
            })
            .catch(error => {
                reject(error);
            });
    });
}





module.exports = router;
