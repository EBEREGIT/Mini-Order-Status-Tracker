
# Mini Order Status Tracker

A minimal order fulfillment tracking application built as a take-home assignment. This application allows users to view a list of orders with details like customer information, fulfillment status, and ordered items.

## Table of Contents
- [Objective](#objective)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Version Control](#version-control)
- [Presentation](#presentation)
- [License](#license)

## Objective
This application is designed to:
- Display a list of orders with details such as Customer Name, Address, Fulfillment Status, and Order Line Items.
- Use efficient server-side filtering and pagination to improve performance when retrieving and displaying orders.

## Features
- **Order Management**: Displays order details, including customer name, address, fulfillment status, and items ordered.
- **Server-Side Pagination and Filtering**: Efficient retrieval and display of orders through server-side logic.
- **Responsive UI**: A clean, responsive interface styled with Tailwind CSS and shadcn components.
- **Type Safety**: Strongly typed backend and frontend logic using TypeScript.

### Bonus
- Authentication: Users can authenticate using the email or google account. This was implemented with [Auth.js](https://authjs.dev/).
  
## Tech Stack
- **Backend**: 
  - [tRPC](https://trpc.io/) for API creation.
  - [Prisma](https://www.prisma.io/) as the ORM for database interactions.
  - [PostgreSQL](https://www.postgresql.org/) for the database.
- **Frontend**: 
  - [Next.js](https://nextjs.org/) and [React](https://reactjs.org/) for UI and rendering.
  - [React Table](https://react-table.tanstack.com/) for table rendering.
  - [Tailwind CSS](https://tailwindcss.com/) for styling.
  - [shadcn](https://shadcn.dev/) for additional UI components.
- **Authentication**: [Auth.js](https://authjs.dev/)
- **Version Control**: GitHub with a private repository.
- **Language**: TypeScript for both frontend and backend.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/EBEREGIT/cybership_frontend
   cd cybership_frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env

    DATABASE_URL=""

    BASE_URL="http://localhost:3000/"

    ROWS_PER_PAGE=20

    AUTH_SECRET="3MGG07UTk3s8VFiw49YMnzOLTsrBudipNGMK111TnrM="

    AUTH_GOOGLE_ID=""
    AUTH_GOOGLE_SECRET=""

    EMAIL_SERVER_USER=""
    EMAIL_SERVER_PASSWORD=""
    EMAIL_SERVER_HOST=""
    EMAIL_SERVER_PORT=""
    EMAIL_FROM=""
   ```

   The following resources might be helpful to get those variables:
   - [How to generate Google and GitHub Client Secret and Client ID](https://www.youtube.com/watch?v=GN4jeft00EQ)
   - [How To Get Email Server Details for Gmail](https://www.youtube.com/watch?v=Zi2IrgdDhnQ&t=1s)
   - [How to Set up Prisma and NextAuth in a Nextjs Project](https://www.youtube.com/watch?v=GohA6Yf3dAw&t=2s)
   - [Introduction to Authentication with Auth.js, Nextjs, Postgresql](https://www.youtube.com/watch?v=L_Vg7GN8G_M)

4. **Setup Database**:
   Run the Prisma migration to set up the PostgreSQL database schema:
   ```bash
   npx prisma migrate dev
   ```

5. **Populate Database**:
   Run the Prisma migration to set up the PostgreSQL database schema:
   ```bash
   node seed.js
   ```

6. **Run the Development Server**:
   Start the Next.js development server:
   ```bash
   npm run dev
   ```

7. **Open the App**:
   Visit `http://localhost:3000` in your browser to view the application.

## Usage
- **Orders List**: The main page displays a table with order details, including customer information, fulfillment status, and items ordered.
- **Filtering and Pagination**: Use server-side logic to efficiently paginate and filter order results.

## Version Control
- All code is version-controlled in a private GitHub repository. 
- Commits are meaningful and represent significant development milestones.

## Presentation
This video demo showcases the application's core functionality, including order viewing, filtering, and pagination.

## License
MIT

---

Please feel free to reach out if you have any questions or need further clarification on the project setup.
