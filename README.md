# 🌸 BloomFlow - Sivakasi Flower Shop (Full-Stack Web Application)

A modern, high-performance Full-Stack Web Application for **BloomFlow Flower Shop (Sivakasi)** built with **HTML5, CSS3, JavaScript, Bootstrap 5**, powered by a **Node.js & Express.js** REST API backend, and connected to **MongoDB** using Mongoose.

---

## 🌟 Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Vanilla & Custom UI), JavaScript (ES6+), Bootstrap 5 (CDN & Components), FontAwesome 6 |
| **Backend** | Node.js, Express.js (REST API, CORS, Body-Parser, Morgan, Dotenv) |
| **Database** | MongoDB & Mongoose ODM (Schemas, Models, Indexing & Auto-Seeding) |
| **Security & Auth** | JSON Web Tokens (JWT), Bcrypt.js Password Hashing, Role-Based Access Control |

---

## 📁 Project Directory Structure

```
flower project/
├── config/
│   └── db.js                 # MongoDB connection logic (Mongoose)
├── models/
│   ├── User.js               # Customer & Admin user schema with bcrypt
│   ├── Product.js            # Flower catalog items schema
│   ├── Order.js              # Checkout orders schema
│   └── Booking.js            # Event decoration bookings schema
├── routes/
│   ├── authRoutes.js         # /api/auth (Register, Login, Admin Login, Profile)
│   ├── productRoutes.js      # /api/products (CRUD, Categories, Search)
│   ├── orderRoutes.js        # /api/orders (Checkout, History, Status updates)
│   ├── bookingRoutes.js      # /api/bookings (Event booking inquiries & queue)
│   ├── adminRoutes.js        # /api/admin (Analytics stats: Sales, Orders, Bookings)
│   └── seedRoutes.js         # /api/seed (1-click database seeder)
├── js/
│   └── api.js                # Frontend API bridge client with live health indicator
├── images/                   # High quality flower & garland images
├── .env                      # Server & MongoDB connection configuration
├── .env.example              # Environment variable template
├── package.json              # Project dependencies & scripts
├── seeder.js                 # Standalone seeder script (`npm run seed`)
├── server.js                 # Express server & static asset host
├── home.html & home.css      # Landing page / Storefront
├── flowers.html & flowers.css# Full flower catalog, live filters & cart drawer
├── flowers.js                # Catalog UI and dynamic MongoDB loader
├── categories.html           # Category browser
├── flower-details.html       # Single product details & customer reviews
├── customize-bouquet.html    # Interactive custom bouquet builder
├── booking.html              # Event floral styling consultation form
├── checkout.html             # Delivery address and checkout
├── payment.html              # Interactive payment gateway
├── order-success.html        # Order invoice receipt
├── login.html & register.html# User authentication
├── profile.html & profile.css# User order & booking history
├── admin-login.html          # Admin secure portal
└── admin-dashboard.html      # Admin analytics, catalog & orders manager
```

---

## 🚀 Quick Start Guide (எப்படி Run செய்வது)

### 1. Prerequisites (தேவையானவை)
- **Node.js** (v16+ or v18+ recommended)
- **MongoDB** (Local `mongod` service running OR MongoDB Atlas Cloud Connection URI)

### 2. Install Dependencies
Open terminal / command prompt inside the project folder:
```bash
npm install
```

### 3. Database Configuration (`.env`)
The project comes with pre-configured `.env`. You can edit `.env` if you are using MongoDB Atlas:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/bloomflow_db
JWT_SECRET=bloomflow_super_secret_jwt_key_2026_secure
JWT_EXPIRE=7d
```

### 4. Seed Initial Data (Database-ல் பூக்கள் மற்றும் Admin கணக்கை ஏற்ற)
Run the seeder script to populate 25+ Sivakasi flowers and default Admin:
```bash
npm run seed
```
*Or simply start the server and visit `http://localhost:5000/api/seed` in your browser.*

### 5. Start the Full-Stack Server
```bash
npm start
```
*For automatic restart during development:*
```bash
npm run dev
```

### 6. Open in Browser
- **Storefront Website**: [http://localhost:5000](http://localhost:5000) or [http://localhost:5000/home.html](http://localhost:5000/home.html)
- **Flower Catalog**: [http://localhost:5000/flowers.html](http://localhost:5000/flowers.html)
- **Admin Gateway**: [http://localhost:5000/admin-login.html](http://localhost:5000/admin-login.html)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🔑 Default Credentials (உள்நுழைவு விவரங்கள்)

### 👑 Admin Account (நிர்வாகி)
- **Email / Username**: `admin@bloomflow.com` (or `admin`)
- **Password**: `admin123`
- **Dashboard URL**: `admin-dashboard.html`

### 👤 Demo Customer Account (வாடிக்கையாளர்)
- **Email**: `customer@bloomflow.com`
- **Password**: `password123`
- **Or register a new account on `register.html`**

---

## 📡 REST API Endpoints

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register new customer account |
| `POST` | `/api/auth/login` | Login existing customer (returns JWT) |
| `POST` | `/api/auth/admin-login` | Admin login |
| `GET` | `/api/auth/me` | Get current logged in user details |

### 🌸 Products Catalog (`/api/products`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Get all products (supports `?category=`, `?search=`, `?sort=`) |
| `GET` | `/api/products/:id` | Get single product by numeric ID or Mongo ID |
| `POST` | `/api/products` | Create new flower item (Admin) |
| `PUT` | `/api/products/:id` | Update product details (Admin) |
| `DELETE` | `/api/products/:id` | Delete product (Admin) |

### 🛍️ Orders (`/api/orders`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/orders` | Place a new flower order |
| `GET` | `/api/orders/my-orders?email=` | Get order history for a customer |
| `GET` | `/api/orders` | Get all orders queue (Admin) |
| `PUT` | `/api/orders/:id/status` | Update order status (Pending/Confirmed/Delivered) |
| `DELETE` | `/api/orders/:id` | Delete order record |

### 🎉 Event Bookings (`/api/bookings`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/bookings` | Submit event floral decoration booking |
| `GET` | `/api/bookings/my-bookings?email=` | Get bookings for customer |
| `GET` | `/api/bookings` | Get all event bookings queue (Admin) |
| `PUT` | `/api/bookings/:id/status` | Update booking status |
| `DELETE` | `/api/bookings/:id` | Delete booking record |

### 📊 Admin Analytics (`/api/admin`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/admin/stats` | Calculates gross sales, total orders, bookings, and customer counts |

### ⚙️ System & Seeder (`/api/seed`, `/api/health`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Check server and MongoDB connection status |
| `GET/POST`| `/api/seed` | Seed default products and admin user into MongoDB |

---

## 💡 Dual Mode & Graceful Fallback
Even if the backend server or MongoDB is starting or running offline, the frontend's **`js/api.js`** seamlessly handles requests with local storage fallback and displays a live connection status pill at the bottom-left of the screen (`🟢 Server & MongoDB Connected` or `🟡 Local Mode`), ensuring 100% uptime and smooth user experience in all conditions.
