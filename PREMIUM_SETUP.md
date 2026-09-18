# JFJM Universe Premium Vault — one-time Supabase setup

1. In Supabase, open **SQL Editor** and run the complete `supabase-schema.sql` file.
2. In **Authentication → URL Configuration**, add your live Vercel address followed by `/premium/` to **Redirect URLs**.
3. Keep Email provider enabled.
4. Confirm the private `jfjm-payment-slips` bucket exists after the SQL run.
5. Do not put a Supabase `service_role` key in `config.js`.
