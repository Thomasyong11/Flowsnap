import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        id: contact.id
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message,
          errors: error.errors
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your message. Please try again."
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching contacts."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
