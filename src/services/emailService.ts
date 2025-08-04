import emailjs from "@emailjs/browser"

// EmailJS Configuration - Replace with your actual values
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id"
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id"
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key"

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendEmailWithEmailJS = async (formData: ContactFormData) => {
  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "John Doe", // Your name
    }

    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

    console.log("Email sent successfully:", response)
    return { success: true, data: response }
  } catch (error) {
    console.error("EmailJS error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}

// Alternative method using form reference (useful for forms)
export const sendEmailFromForm = async (form: HTMLFormElement) => {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY)

    const response = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)

    console.log("Email sent successfully:", response)
    return { success: true, data: response }
  } catch (error) {
    console.error("EmailJS error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
