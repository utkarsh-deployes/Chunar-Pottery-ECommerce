# Potter.com - E-commerce Platform for Pottery Products

Potter.com is a full-fledged **e-commerce platform** built using the **MERN stack**. It provides a secure and seamless shopping experience for pottery enthusiasts, allowing them to browse, purchase, and manage pottery products effortlessly. The platform integrates a **secure payment gateway**, ensuring safe transactions.

## Features
- **User Authentication**: Secure login and registration system using JWT/OAuth.
- **Product Management**: Add, update, and delete pottery products.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Secure Payments**: Integrated payment processing using Stripe/Razorpay/PayPal.
- **Order Tracking**: Users can track their orders and delivery status.
- **Responsive UI**: Optimized for both desktop and mobile devices.
- **Admin Dashboard**: Manage products, orders, and users efficiently.
- **Wishlist & Reviews**: Users can add products to their wishlist and leave reviews.

## Future Enhancements
- **AR & VR Integration**: Users will be able to visualize pottery products in their environment before purchase.
- **AI & ML Implementation**: Personalized product recommendations and chatbot assistance.
- **AWS Deployment**: Planning to launch and scale the platform using AWS infrastructure.

## Technologies Used
- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Token (JWT) / OAuth
- **Payment Gateway**: Stripe / Razorpay / PayPal
- **State Management**: Redux / Context API
- **Cloud Storage**: AWS S3 for storing images and assets
- **Deployment**: AWS / Vercel / Netlify

## Installation

### Clone the Repository
```sh
git clone https://github.com/Abhi-2516/potter-com.git
cd potter-com
```

### Install Dependencies
#### Install both client and server dependencies
```sh
npm install
cd client && npm install
cd ../server && npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and configure the necessary environment variables:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
```

### Run the Application
#### Start Backend Server
```sh
cd server
npm start
```
#### Start Frontend
```sh
cd client
npm run dev
```
The application will be accessible at `http://localhost:3000/`.

## Usage
1. **Sign up / Log in** to create an account.
2. **Browse pottery products** and add to the cart.
3. **Proceed to secure checkout** and complete the payment.
4. **Track orders** via the user dashboard.
5. **Leave reviews & wishlist items** for future purchases.

## API Routes
- **User Authentication**
  - `POST /api/auth/signup` - Register a new user
  - `POST /api/auth/login` - Authenticate and login user
- **Products**
  - `GET /api/products` - Fetch all pottery products
  - `POST /api/products` - Add a new product (Admin)
- **Orders & Payments**
  - `POST /api/order` - Place an order
  - `POST /api/payment` - Process a transaction via Stripe



## Contact
For inquiries, contact me at: [2516abhi43@gmail.com](mailto:2516abhi43@gmail.com)

