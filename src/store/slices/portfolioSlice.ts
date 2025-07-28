import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ContactForm {
  name: string
  email: string
  message: string
}

interface PortfolioState {
  activeSection: string
  selectedProject: string | null
  contactForm: ContactForm
  isContactFormSubmitted: boolean
  isSubmitting: boolean
  submitError: string | null
}

const initialState: PortfolioState = {
  activeSection: "home",
  selectedProject: null,
  contactForm: {
    name: "",
    email: "",
    message: "",
  },
  isContactFormSubmitted: false,
  isSubmitting: false,
  submitError: null,
}

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
    setSelectedProject: (state, action: PayloadAction<string | null>) => {
      state.selectedProject = action.payload
    },
    updateContactForm: (state, action: PayloadAction<Partial<ContactForm>>) => {
      state.contactForm = { ...state.contactForm, ...action.payload }
    },
    resetContactForm: (state) => {
      state.contactForm = { name: "", email: "", message: "" }
      state.isContactFormSubmitted = false
      state.submitError = null
    },
    submitContactFormStart: (state) => {
      state.isSubmitting = true
      state.submitError = null
    },
    submitContactFormSuccess: (state) => {
      state.isContactFormSubmitted = true
      state.isSubmitting = false
      state.submitError = null
    },
    submitContactFormFailure: (state, action: PayloadAction<string>) => {
      state.isSubmitting = false
      state.submitError = action.payload
    },
  },
})

export const {
  setActiveSection,
  setSelectedProject,
  updateContactForm,
  resetContactForm,
  submitContactFormStart,
  submitContactFormSuccess,
  submitContactFormFailure,
} = portfolioSlice.actions
export default portfolioSlice.reducer
