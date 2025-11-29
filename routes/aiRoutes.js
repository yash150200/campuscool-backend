// // // // // backend/routes/aiRoutes.js
// // // // const express = require("express");
// // // // const axios = require("axios");
// // // // const auth = require("../middleware/authMiddleware");
// // // // require("dotenv").config();

// // // // const router = express.Router();

// // // // router.post("/ask", auth, async (req, res) => {
// // // //   try {
// // // //     const { question } = req.body;

// // // //     if (!question) {
// // // //       return res.status(400).json({ msg: "Please provide a question" });
// // // //     }

// // // //     const response = await axios.post(
// // // //       "https://openrouter.ai/api/v1/chat/completions",
// // // //       {
// // // //         model: "openai/gpt-3.5-turbo",
// // // //         messages: [{ role: "user", content: question }],
// // // //       },
// // // //       {
// // // //         headers: {
// // // //           // Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
// // // //           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,

// // // //           "Content-Type": "application/json",
// // // //           "HTTP-Referer": "http://localhost:3000", // change this to your actual frontend URL when deployed
// // // //           "X-Title": "CampusCool AI Assistant"
// // // //         }
// // // //       }
// // // //     );

// // // //     const answer = response.data.choices[0].message.content;
// // // //     res.json({ answer });
// // // //   } catch (err) {
// // // //     console.error("AI Error:", err.response?.data || err.message);
// // // //     res.status(500).json({ msg: "AI failed to respond" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // // backend/routes/aiRoutes.js
// // // const express = require("express");
// // // const axios = require("axios");
// // // const auth = require("../middleware/authMiddleware");
// // // require("dotenv").config();

// // // const router = express.Router();

// // // router.post("/ask", auth, async (req, res) => {
// // //   try {
// // //     const { question } = req.body;
// // //     console.log("🧠 Question received:", question);

// // //     if (!question) {
// // //       return res.status(400).json({ msg: "Please provide a question" });
// // //     }

// // //     // const apiKey = process.env.OPENAI_API_KEY;
// // //     const apiKey = process.env.OPENROUTER_API_KEY;
// // //     console.log("🔑 Using API Key:", apiKey?.slice(0, 10) + "...");


// // //     if (!apiKey) {
// // //       console.error("❌  OPENROUTER_API_KEY is missing in .env");
// // //       return res.status(500).json({ msg: "Server configuration error: API key missing" });
// // //     }

// // //     const response = await axios.post(
// // //       "https://openrouter.ai/api/v1/chat/completions",
// // //       {
// // //         model: "openai/gpt-3.5-turbo",
// // //         messages: [{ role: "user", content: question }],
// // //       },
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${apiKey}`,
// // //           "Content-Type": "application/json",
// // //           "HTTP-Referer": "http://localhost:3000",
// // //           "X-Title": "CampusCool AI Assistant"
// // //         }
// // //       }
// // //     );

// // //     const answer = response.data.choices[0].message.content;
// // //     console.log("✅ AI Response:", answer);
// // //     res.json({ answer });

// // //   } catch (err) {
// // //     const errData = err.response?.data || err.message || "Unknown error";
// // //     console.error("❌ AI Error:", errData);
// // //     res.status(500).json({ msg: "AI failed to respond", error: errData });
// // //   }
// // // });

// // // module.exports = router;

// // const express = require("express");
// // const axios = require("axios");
// // const auth = require("../middleware/authMiddleware");
// // require("dotenv").config();

// // const router = express.Router();

// // router.post("/ask", auth, async (req, res) => {
// //   try {
// //     const { question } = req.body;
// //     console.log("🧠 Question received:", question);

// //     if (!question) {
// //       return res.status(400).json({ msg: "Please provide a question" });
// //     }

// //     const apiKey = process.env.OPENROUTER_API_KEY;

// //     if (!apiKey) {
// //       console.error("❌ OPENROUTER_API_KEY is missing in .env");
// //       return res.status(500).json({ msg: "Server configuration error: API key missing" });
// //     }

// //     const response = await axios.post(
// //       "https://openrouter.ai/api/v1/chat/completions",
// //       {
// //         model: "mistralai/mistral-7b-instruct", // ✅ Free model
// //         messages: [{ role: "user", content: question }],
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${apiKey}`,
// //           "Content-Type": "application/json",
// //           "HTTP-Referer": "http://localhost:3000", // Change this if deploying
// //           "X-Title": "CampusCool AI Assistant"
// //         }
// //       }
// //     );

// //     const answer = response.data.choices[0].message.content;
// //     console.log("✅ AI Response:", answer);
// //     res.json({ answer });

// //   } catch (err) {
// //     const errData = err.response?.data || err.message || "Unknown error";
// //     console.error("❌ AI Error:", errData);
// //     res.status(500).json({ msg: "AI failed to respond", error: errData });
// //   }
// // });

// // module.exports = router;

// // backend/routes/aiRoutes.js
// const express = require("express");
// const axios = require("axios");
// const auth = require("../middleware/authMiddleware");
// require("dotenv").config();

// const router = express.Router();

// router.post("/ask", auth, async (req, res) => {
//   try {
//     const { question } = req.body;
//     console.log("🧠 Question received:", question);

//     if (!question) {
//       return res.status(400).json({ msg: "Please provide a question" });
//     }

//     const apiKey = process.env.OPENROUTER_API_KEY;

//     if (!apiKey) {
//       console.error("❌ OPENROUTER_API_KEY is missing in .env");
//       return res.status(500).json({ msg: "Server configuration error: API key missing" });
//     }

//     // Call OpenRouter API
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         model: "openai/gpt-3.5-turbo", // ✅ safer and more reliable
//         messages: [{ role: "user", content: question }],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//           "Content-Type": "application/json",
//           "HTTP-Referer": "http://localhost:3000", // update if deployed
//           "X-Title": "CampusCool AI Assistant",
//         },
//       }
//     );

//     // Log raw response for debugging
//     console.log("📩 Raw AI Response:", JSON.stringify(response.data, null, 2));

//     // Safely extract answer
//     const answer =
//       response.data?.choices?.[0]?.message?.content?.trim() ||
//       "Sorry, I couldn’t generate an answer.";

//     console.log("✅ Final AI Response:", answer);

//     res.json({ answer });
//   } catch (err) {
//     const errData = err.response?.data || err.message || "Unknown error";
//     console.error("❌ AI Error:", errData);
//     res.status(500).json({ msg: "AI failed to respond", error: errData });
//   }
// });

// module.exports = router;
// backend/routes/aiRoutes.js
const express = require("express");
const axios = require("axios");
const { authMiddleware } = require("../middleware/authMiddleware"); // ✅ Correct import
require("dotenv").config();

const router = express.Router();

router.post("/ask", authMiddleware, async (req, res) => {
  try {
    const { question } = req.body;
    console.log("🧠 Question received:", question);

    if (!question) {
      return res.status(400).json({ msg: "Please provide a question" });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error("❌ OPENROUTER_API_KEY is missing in .env");
      return res.status(500).json({ msg: "Server configuration error: API key missing" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // ✅ safe and stable
        messages: [{ role: "user", content: question }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "CampusCool AI Assistant",
        },
      }
    );

    const answer =
      response.data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn’t generate an answer.";

    console.log("✅ Final AI Response:", answer);
    res.json({ answer });
  } catch (err) {
    const errData = err.response?.data || err.message || "Unknown error";
    console.error("❌ AI Error:", errData);
    res.status(500).json({ msg: "AI failed to respond", error: errData });
  }
});

module.exports = router;
