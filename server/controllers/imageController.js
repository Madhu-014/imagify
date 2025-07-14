import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userID = req.userID; // ✅ from auth middleware

    if (!prompt || !userID) {
      return res.json({ success: false, message: 'Missing details' });
    }

    const user = await userModel.findById(userID);
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No Credit Balance',
        creditBalance: user.creditBalance
      });
    }

    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post(
      'https://clipdrop-api.co/text-to-image/v1',
      formData,
      {
        headers: {
          'x-api-key': process.env.CLIPDROP_API,
          ...formData.getHeaders() // ✅ Required for multipart/form-data
        },
        responseType: 'arraybuffer'
      }
    );

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Reduce credits
    await userModel.findByIdAndUpdate(userID, {
      creditBalance: user.creditBalance - 1
    });

    res.json({
      success: true,
      message: 'Image Generated',
      creditBalance: user.creditBalance - 1,
      resultImage
    });

  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
