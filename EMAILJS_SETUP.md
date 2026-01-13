# EmailJS Setup Instructions

To enable email functionality in your contact form, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (logicode.en@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form

**Subject:** New Contact from Portfolio

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Copy the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Code
Open `src/App.tsx` and replace these values in the Contact component:

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Install Dependencies
Run in terminal:
```bash
npm install
```

## Step 7: Test
1. Start your dev server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email (logicode.en@gmail.com)

## Free Tier Limits
- 200 emails/month (free tier)
- Perfect for portfolio sites

## Alternative: Use Formspree
If you prefer, you can use Formspree instead:
1. Go to https://formspree.io/
2. Create account and form
3. Get form endpoint
4. Update form action to use Formspree endpoint

