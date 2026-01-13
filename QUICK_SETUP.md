# 🚀 QUICK SETUP - Get Your Contact Form Working in 2 Minutes!

## Step-by-Step Instructions:

### 1. Go to Formspree
Visit: **https://formspree.io/**

### 2. Sign Up (Free)
- Click "Sign Up" 
- Use your email (logicode.en@gmail.com works)
- Verify your email

### 3. Create a Form
- Click "New Form" button
- Name it "Portfolio Contact Form"
- Click "Create"

### 4. Get Your Form ID
After creating, you'll see a URL like:
```
https://formspree.io/f/abc123xyz456
```
**Copy just the ID part:** `abc123xyz456`

### 5. Update Your Code
1. Open `src/App.tsx` in your editor
2. Find this line (around line 670):
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Replace `YOUR_FORM_ID` with your actual ID:
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/abc123xyz456';
   ```
4. Save the file

### 6. Configure Email
1. In Formspree dashboard, go to your form settings
2. Under "Email Notifications"
3. Set recipient email to: **logicode.en@gmail.com**
4. Save

### 7. Test It!
1. Run: `npm run dev`
2. Fill out the contact form
3. Submit
4. Check your email: **logicode.en@gmail.com**

## ✅ That's It!

Your form will now send emails directly to your inbox!

## Need Help?
- Formspree docs: https://help.formspree.io/
- Free tier: 50 submissions/month (perfect for portfolio)

