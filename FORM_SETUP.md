# Contact Form Setup - Choose One Option

## Option 1: Formspree (EASIEST - Recommended) ⭐

### Steps:
1. Go to https://formspree.io/
2. Sign up for free account
3. Click "New Form"
4. Copy your form endpoint (looks like: `https://formspree.io/f/xxxxxxxxxx`)
5. Open `src/App.tsx`
6. Find line with: `const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';`
7. Replace `YOUR_FORM_ID` with your actual form ID
8. Done! No installation needed.

**Free tier:** 50 submissions/month (perfect for portfolio)

---

## Option 2: EmailJS (More Control)

### Steps:
1. Install package: `npm install`
2. Go to https://www.emailjs.com/
3. Sign up for free account
4. Create Email Service (connect Gmail: logicode.en@gmail.com)
5. Create Email Template:
   - Subject: `New Contact from {{from_name}}`
   - Body: 
     ```
     From: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
6. Get your credentials:
   - Service ID (e.g., `service_xxxxx`)
   - Template ID (e.g., `template_xxxxx`)
   - Public Key (from Account settings)
7. Open `src/App.tsx`
8. Uncomment the EmailJS code (lines with `/* */`)
9. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`
10. Comment out the Formspree code

**Free tier:** 200 emails/month

---

## Quick Test

After setup:
1. Run `npm run dev`
2. Fill out contact form
3. Submit
4. Check your email: logicode.en@gmail.com

---

## Which Should I Use?

- **Formspree**: Easier setup, no code changes needed (just replace one URL)
- **EmailJS**: More customization, requires template setup

Both are free and work great for portfolios!

