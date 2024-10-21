# RESTful API for Contact Management

This project implements a RESTful API that enables users to manage contacts securely. It includes features like user authentication (with JWT), robust contact handling, file uploads for bulk operations, and data validation.

---

## Table of Contents

1. [User Authentication](#user-authentication)
2. [Contact Management](#contact-management)
3. [Data Validation](#data-validation)
4. [Timezone and Date Handling](#timezone-and-date-handling)
5. [Bulk File Handling](#bulk-file-handling)
6. [Database Configuration](#database-configuration)
7. [Security Measures](#security-measures)
8. [Project Setup](#project-setup)
9. [Database Schema (ER Diagram)](#database-schema-er-diagram)
10. [API Documentation](#api-documentation)
11. [Database Migrations and Seeding](#database-migrations-and-seeding)
12. [Additional Information](#additional-information)

---

## <a id="user-authentication">1. User Authentication</a>

### a. JWT-Based Authentication

- Users can register and log in using JSON Web Tokens (JWT), which will be required for accessing protected routes.
- Upon successful registration, users will receive a JWT token to authenticate future requests.

### b. Email Verification

- After registering, users receive an email containing a verification token that needs to be validated to activate their account.

### c. Password Recovery

- Password reset functionality is provided by generating a one-time code (OTC), which users receive via email. The code, along with the new password, is used to reset the account password.

---

## <a id="contact-management">2. Contact Management </a>

### a. API Endpoints

- **POST /contacts**: Add a new contact, including fields like name, email, phone, address, and timezone.

- **GET /contacts**: Retrieve a list of contacts, with optional filtering by name, email, or timezone. Sorting options are also supported.

- **PUT /contacts/{id}**: Update a contact's details.

- **DELETE /contacts/{id}**: Perform a soft delete of a contact, keeping the data but marking it as inactive.

- **POST /contacts/batch**: Batch creation or updating of multiple contacts in a single request.

---

## <a id="data-validation">3. Data Validation</a>

### a. Input Validation

- Data submitted by users is validated using a library such as Joi or Yup to ensure it meets specific requirements, including mandatory fields and valid email formats.

### b. Email Uniqueness

- Both the user and contact tables enforce unique email constraints to avoid duplication of records.

---

## <a id="timezone-and-date-handling">4. Timezone and Date Handling</a>

### a. Timestamps in UTC

- All timestamps (e.g., when a contact is created or updated) are stored in UTC for consistency.

### b. Timezone Conversion

- When fetching data, UTC timestamps are converted to the user's preferred timezone for readability.

### c. Date Range Filters

- Users can retrieve contacts created within a specific date range using query parameters.

---

## <a id="bulk-file-handling">5. Bulk File Handling</a>

### a. CSV/Excel Uploads

- **POST /contacts/upload**: Allows users to upload CSV or Excel files for bulk creation or updating of contacts. The data in the file is validated before being saved.

### b. Exporting Contacts

- **GET /contacts/download**: This endpoint lets users download a CSV or Excel file containing all contacts, including their creation dates and timezones.

---

## <a id="database-configuration">6. Database Configuration</a>

- The project uses a relational database, such as PostgreSQL or MySQL, to store users and contacts.
- Relationships between users and contacts are structured to maintain normalization.
- The database schema is optimized for performance and scalability.

---

## <a id="security-measures">7. Security Measures</a>

### a. Rate Limiting

- Sensitive endpoints, such as login, registration, and password reset, are protected with rate-limiting to mitigate brute-force attacks.

### b. Password Hashing

- Passwords are hashed using a secure algorithm (e.g., bcrypt) before being stored in the database.

---

## <a id="project-setup">8. Project Setup</a>

### Prerequisites

To run this project, you'll need:

1. **Node.js** (version 14 or higher)
2. **PostgreSQL/MySQL** (version 12 or higher)
3. **npm** (or **yarn**)
4. **Git** (optional for cloning the repository)

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/contact-management-api.git
   cd contact-management-api
   ```
