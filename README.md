# Resume Setup Instructions

## Adding Your Resume PDF

1. **Place your resume PDF** in the `public` folder with the name `resume.pdf`
2. **Update the resume URL** in `src/components/sections/Resume.tsx` if you want to use a different filename
3. **Customize the download filename** by changing the `link.download` value in the `handleDownload` function

## File Structure
\`\`\`
public/
├── resume.pdf          <- Place your resume here
├── vite.svg
└── README.md
\`\`\`

## Supported Features

- ✅ **PDF Preview** - Embedded PDF viewer in the browser
- ✅ **Download** - Direct download functionality
- ✅ **New Tab** - Open PDF in a new browser tab
- ✅ **Error Handling** - Fallback UI if PDF can't be loaded
- ✅ **Responsive** - Works on all device sizes
- ✅ **Dark Mode** - Supports light and dark themes

## Customization

### Change Resume Filename
In `src/components/sections/Resume.tsx`, update:
\`\`\`typescript
const resumeUrl = "/your-resume-name.pdf"
\`\`\`

### Update Download Name
\`\`\`typescript
link.download = 'Your_Name_Resume.pdf'
\`\`\`

### Add Multiple Resume Versions
You can extend the component to support multiple resume versions (e.g., different formats or languages).

## Browser Compatibility

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile browsers
- ⚠️ Some browsers may not support PDF embedding (fallback UI provided)

## Security Notes

- PDFs are served from the public folder (publicly accessible)
- Consider using a CDN for better performance
- For sensitive resumes, consider implementing authentication
\`\`\`

Finally, let's update the portfolio slice to handle the resume section:

```typescriptreact file="src/store/slices/portfolioSlice.ts"
[v0-no-op-code-block-prefix]import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

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
