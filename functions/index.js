const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const allowOrigins = [
  "https://my-portfolio-sait.web.app",
  "https://my-portfolio-sait.firebaseapp.com",
  "http://localhost:3000",
  "http://localhost:4173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:4173"
];

const setCors = (req, res) => {
  const origin = String(req.headers.origin || "");
  if (allowOrigins.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Vary", "Origin");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
};

const gmailRegex = /^[a-z0-9._%+-]+@gmail\.com$/i;
const emailRegex = /^\S+@\S+\.\S+$/;

const getMailConfig = () => {
  const mailCfg = functions.config()?.mail || {};
  return {
    user: String(mailCfg.user || "").trim(),
    pass: String(mailCfg.pass || "").trim(),
    to: String(mailCfg.to || "kajosiamaja@gmail.com").trim()
  };
};

const transporterFromConfig = (config) =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user,
      pass: config.pass
    }
  });

exports.sendPortfolioMessage = functions
  .region("us-central1")
  .runWith({ timeoutSeconds: 30, memory: "256MB" })
  .https.onRequest(async (req, res) => {
    setCors(req, res);

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ ok: false, error: "Method not allowed" });
      return;
    }

    const config = getMailConfig();
    if (!config.user || !config.pass || !config.to) {
      res.status(500).json({ ok: false, error: "Mail server is not configured" });
      return;
    }

    const body = req.body || {};
    const type = String(body.type || "").trim();

    let subject = "";
    let text = "";
    let replyTo = "";

    if (type === "tester_join") {
      const email = String(body.email || "").trim();
      const projectTitle = String(body.projectTitle || "").trim();
      const projectId = String(body.projectId || "").trim();
      const pageUrl = String(body.pageUrl || "").trim();

      if (!gmailRegex.test(email)) {
        res.status(400).json({ ok: false, error: "Invalid Gmail address" });
        return;
      }

      subject = "Бажаю доєднатись до команди тестувальників";
      text = [
        "Нова заявка від користувача:",
        `Пошта: ${email}`,
        projectTitle ? `Проект: ${projectTitle}` : "",
        projectId ? `Project ID: ${projectId}` : "",
        pageUrl ? `Сторінка: ${pageUrl}` : "",
        "",
        "Текст заявки:",
        `Бажаю доєднатись з поштою ${email}`
      ]
        .filter(Boolean)
        .join("\n");
      replyTo = email;
    } else if (type === "feedback") {
      const name = String(body.name || "").trim();
      const email = String(body.email || "").trim();
      const feedbackSubject = String(body.subject || "").trim();
      const message = String(body.message || "").trim();
      const pageUrl = String(body.pageUrl || "").trim();

      if (!name || !feedbackSubject || !message || !emailRegex.test(email)) {
        res.status(400).json({ ok: false, error: "Invalid feedback payload" });
        return;
      }

      subject = `[Зворотний зв'язок] ${feedbackSubject}`;
      text = [
        `Ім'я: ${name}`,
        `Email: ${email}`,
        pageUrl ? `Сторінка: ${pageUrl}` : "",
        "",
        "Повідомлення:",
        message
      ]
        .filter(Boolean)
        .join("\n");
      replyTo = email;
    } else {
      res.status(400).json({ ok: false, error: "Unsupported type" });
      return;
    }

    try {
      const transporter = transporterFromConfig(config);
      await transporter.sendMail({
        from: `MAXONIK Forms <${config.user}>`,
        to: config.to,
        replyTo,
        subject,
        text
      });

      res.status(200).json({ ok: true });
    } catch (error) {
      functions.logger.error("sendPortfolioMessage failed", error);
      res.status(500).json({ ok: false, error: "Email sending failed" });
    }
  });
