# Larko Foods Website — larkofoods.com

## Quick Deploy Guide

### What you need:
- A GitHub account (free) — github.com
- A Vercel account (free) — vercel.com
- Your Namecheap account (where you bought larkofoods.com)

---

### STEP 1: Create a GitHub account (if you don't have one)
1. Go to **github.com** and click "Sign up"
2. Follow the steps to create your account

### STEP 2: Upload this project to GitHub
1. Log in to **github.com**
2. Click the **+** button (top right) → **"New repository"**
3. Name it: **larko-foods**
4. Keep it **Public** (or Private, both work)
5. Click **"Create repository"**
6. On the next page, click **"uploading an existing file"**
7. Drag ALL the files from this folder into the upload area
8. Click **"Commit changes"**

### STEP 3: Deploy on Vercel
1. Go to **vercel.com** and sign up with your GitHub account
2. Click **"Add New Project"**
3. Select your **larko-foods** repository
4. Vercel auto-detects it's Next.js — just click **"Deploy"**
5. Wait 1-2 minutes — your site is now live at a Vercel URL!

### STEP 4: Connect larkofoods.com
1. In Vercel, go to your project → **Settings** → **Domains**
2. Type: **larkofoods.com** → click **Add**
3. Vercel will show you DNS records to add. You'll see something like:
   - Type: **A** Record → Value: **76.76.21.21**
   - Type: **CNAME** → Name: **www** → Value: **cname.vercel-dns.com**
4. Now go to **Namecheap** → **Domain List** → click **Manage** on larkofoods.com
5. Click **"Advanced DNS"** tab
6. Add the records Vercel gave you:
   - Add **A Record**: Host = @, Value = 76.76.21.21
   - Add **CNAME Record**: Host = www, Value = cname.vercel-dns.com
7. Wait 5-30 minutes for DNS to update
8. Go back to Vercel — it should show ✅ connected!

### STEP 5: You're live!
Visit **larkofoods.com** — your site is live with free SSL (https)!

---

## Managing Your Site

### Admin Panel
- Visit: **larkofoods.com** (scroll to footer, click "Admin")
- Password: **larko2026**

### What you can do in Admin:
- 📊 **Overview** — See page visits, orders, popular products, countries
- 📦 **Products** — Add, edit, delete products with photos & prices
- 🍛 **Dishes** — Manage Friday dishes (Liverpool)
- ✏️ **Content** — Edit announcement banners and hero text
- 🛒 **Orders** — View order history by region

### Updating Prices
Products are priced in GH₵ and auto-convert to £/$/C$ using Bank of Ghana rates.
To update the exchange rate, edit the top of LarkoFoods.jsx:
```
const BOG_RATE = 14.50;  // 1 GBP = X GHS
const USD_RATE = 11.00;  // 1 USD = X GHS
const CAD_RATE = 8.00;   // 1 CAD = X GHS
```

### WhatsApp Numbers
- Ghana: 0509 145 145, 0202 566 805
- UK: +44 7351 547775

### FDA Number: FDA/Ss24-064

---

## Need Help?
Contact your developer or reach out via WhatsApp.
