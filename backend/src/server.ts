import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

import { connectDB } from "./config/database";
import { errorHandler } from "./middleware/errorHandler";
import { requestLogger } from "./middleware/logger";

// Routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import productRoutes from "./routes/products";
import categoryRoutes from "./routes/categories";
import orderRoutes from "./routes/orders";
import cartRoutes from "./routes/cart";
import walletRoutes from "./routes/wallet";
import ticketRoutes from "./routes/tickets";
import subscriptionRoutes from "./routes/subscriptions";
import vendorRoutes from "./routes/vendors";
import adminRoutes from "./routes/admin";
import analyticsRoutes from "./routes/analytics";
import notificationRoutes from "./routes/notifications";
import uploadRoutes from "./routes/upload";
import cmsRoutes from "./routes/cms";
import blogRoutes from "./routes/blog";
import referralRoutes from "./routes/referral";
import iptvRoutes from "./routes/iptv";
import licenseRoutes from "./routes/licenses";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  },
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests, please try again later." },
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(compression());
app.use(morgan("dev"));
app.use(requestLogger);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString(), version: "1.0.0" });
});

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/wallet", walletRoutes);
app.use("/api/v1/tickets", ticketRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/vendors", vendorRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/cms", cmsRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/referral", referralRoutes);
app.use("/api/v1/iptv", iptvRoutes);
app.use("/api/v1/licenses", licenseRoutes);

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("join-room", (userId: string) => {
    socket.join(`user-${userId}`);
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

// Make io accessible to routes
app.set("io", io);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Database connection and server start
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  httpServer.listen(PORT, () => {
    console.log(`🚀 PlayBeat Digital API Server running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`🔌 Socket.IO enabled for real-time updates`);
  });
});

export { io };
export default app;
