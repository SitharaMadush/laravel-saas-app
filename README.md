# Laravel SaaS Starter

A full-stack SaaS application built with Laravel and React, featuring a credit-based monetization system with Stripe integration. This project provides a foundation for building subscription-free SaaS applications where users purchase and consume credits for features.

## Key Skills Demonstrated

- **Full-Stack Development**: Laravel 11 backend with React 18 frontend using Inertia.js
- **Payment Integration**: Stripe Checkout with webhook handling for secure payments
- **Credit System**: Flexible credit-based monetization model
- **Modern Frontend**: React with Inertia.js SPA, Tailwind CSS, Headless UI
- **DevOps**: Docker containerization for local development and production

---

## Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| **PHP 8.2+** | Server-side language |
| **Laravel 11** | Backend framework |
| **Inertia.js** | SPA bridge (eliminates API layer) |
| **Laravel Breeze** | Authentication scaffolding |
| **Laravel Sanctum** | API authentication |
| **Stripe PHP SDK** | Payment processing |
| **MySQL/MariaDB** | Database |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **Inertia.js** | Client-side adapter |
| **Tailwind CSS** | Utility-first styling |
| **Headless UI** | Accessible UI components |
| **Vite** | Build tool & dev server |

### DevOps & Tooling
| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization |
| **Nginx** | Production web server |
| **Pest** | PHP testing framework |
| **Pint** | PHP code formatting |

---

## Features

- **Credit Packages**: Configurable credit packages with different pricing tiers
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Webhook Handling**: Automatic credit allocation on successful payment
- **Feature System**: Database-driven features that consume credits
- **User Dashboard**: Track available credits and usage history
- **Authentication**: Complete auth flow with registration, login, password reset
- **Profile Management**: Users can update profile and delete account
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS

---

## Architecture

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── Auth/                    # Authentication controllers (Breeze)
│   │   ├── CreditController.php     # Credit purchase & Stripe webhooks
│   │   ├── DashboardController.php  # User dashboard
│   │   ├── Feature1Controller.php   # Feature implementation
│   │   ├── Feature2Controller.php   # Feature implementation
│   │   ├── HomeController.php       # Landing page
│   │   └── ProfileController.php    # User profile management
│   └── Resources/                   # API resources
│
├── Models/
│   ├── User.php                     # User model with credits
│   ├── Feature.php                  # Available features
│   ├── Package.php                  # Credit packages
│   ├── Transaction.php              # Payment transactions
│   └── UsedFeature.php              # Feature usage tracking
│
├── Observers/                       # Model observers
└── Providers/                       # Service providers
```

### Frontend Structure

```
resources/js/
├── app.jsx                          # Application entry point
├── bootstrap.js                     # Axios configuration
│
├── Pages/
│   ├── Auth/                        # Authentication pages
│   ├── Credit/                      # Credit purchase pages
│   ├── Feature1/                    # Feature 1 pages
│   ├── Feature2/                    # Feature 2 pages
│   ├── Profile/                     # Profile management
│   ├── Dashboard.jsx                # User dashboard
│   └── Welcome.jsx                  # Landing page
│
├── Components/                      # Reusable components
└── Layouts/                         # Page layouts
```

---

## Installation

### Prerequisites
- PHP 8.2+
- Composer
- Node.js 18+
- MySQL/MariaDB
- Stripe account

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/laravel-saas-app.git
cd laravel-saas-app

# Install PHP dependencies
composer install

# Install Node dependencies
npm install

# Environment setup
cp .env.example .env
php artisan key:generate

# Configure database in .env
# DB_DATABASE=laravel_saas
# DB_USERNAME=root
# DB_PASSWORD=

# Configure Stripe in .env
# STRIPE_SECRET_KEY=sk_test_xxx
# STRIPE_WEBHOOK_KEY=whsec_xxx

# Run migrations and seeders
php artisan migrate
php artisan db:seed

# Start development servers
composer dev
# Or run separately:
# php artisan serve
# npm run dev
```

### Docker (Development)

```bash
docker-compose up -d
```

### Docker (Production)

```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## Stripe Webhook Setup

For local development, use [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward webhooks:

```bash
stripe listen --forward-to localhost:8000/buy-credits/webhook
```

Copy the webhook signing secret to your `.env` file as `STRIPE_WEBHOOK_KEY`.

---

## Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Landing page |
| GET | `/dashboard` | User dashboard |
| GET | `/feature1` | Feature 1 page |
| POST | `/feature1/calculate` | Use Feature 1 |
| GET | `/feature2` | Feature 2 page |
| POST | `/feature2/calculate` | Use Feature 2 |
| GET | `/buy-credits` | Credit packages page |
| POST | `/buy-credits/{package}` | Initiate Stripe checkout |
| POST | `/buy-credits/webhook` | Stripe webhook endpoint |

---

## Extending the Application

### Adding New Features

1. Create a new controller extending the base controller
2. Add routes in `routes/web.php`
3. Create Inertia pages in `resources/js/Pages/`
4. Add feature to the `features` database table with credit cost

### Customizing Credit Packages

Modify the `packages` database table to add/edit credit packages with different prices and credit amounts.

---

## License

MIT License
