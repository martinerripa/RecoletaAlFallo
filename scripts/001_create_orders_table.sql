-- Create orders table for supplement order management
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  order_details TEXT NOT NULL,
  total_price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  payment_status TEXT NOT NULL DEFAULT 'not_paid' CHECK (payment_status IN ('not_paid', 'cash', 'transfer', 'unknown')),
  delivery_status TEXT NOT NULL DEFAULT 'not_delivered' CHECK (delivery_status IN ('delivered', 'not_delivered')),
  assigned_person TEXT NOT NULL CHECK (assigned_person IN ('Martin', 'Bauti')),
  delivery_type TEXT NOT NULL CHECK (delivery_type IN ('pickup_aguero', 'pickup_french', 'home_delivery')),
  address TEXT NOT NULL DEFAULT '',
  maps_link TEXT NOT NULL DEFAULT '',
  schedule TEXT NOT NULL DEFAULT '',
  notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Disable RLS for this table (no auth required per user request)
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
