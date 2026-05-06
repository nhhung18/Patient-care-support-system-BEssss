web application/stitch/projects/14645816535613760348/screens/d4d0df70aa43444ab75f391b3caa04e4
# PRD - MedCare Manager (Mobile App)

## 1. Project Overview
MedCare Manager is a professional mobile application designed for medical staff (nurses and doctors) to manage ward operations, patient care plans, and clinical orders. The app focuses on "Clinical Clarity," providing a high-density yet intuitive interface with soft visuals and professional medical workflows.

## 2. Core Features & User Flows

### 2.1. Authentication & Main Menu
- **Main Menu**: Central hub with two main functional groups:
    - **Quản lý lưu trú (Stay Management)**: Ward management, shift handovers, and comprehensive reporting.
    - **Hành chính y tế (Medical Admin)**: Document scanning and scan history.
- **Navigation Bar**: Persistent 4-item navigation: Home, Schedule, Notifications, and Profile.

### 2.2. Ward & Patient Management
- **Ward Management**: Filter rooms by Building and Floor. Displays room names and available bed counts.
- **Room Detail**: View all patients and beds within a specific room. Color-coded status for occupied vs. available beds.
- **Patient Detail**: Quick view of vital signs (temp, blood pressure, heart rate, respiration) and administrative data.

### 2.3. Clinical Workflows
- **Medical Orders (Y lệnh)**: Form for creating medical orders with specific clinical notations (Circle for Antibiotics, Triangle for Anti-inflammatories, Square for Sedatives).
- **Nursing Care Plans (Phiếu chăm sóc)**:
    - **Parent Care Plan (Phiếu cha)**: Define general diagnosis and goals.
    - **Child Care Plan (Phiếu con)**: Detailed periodic assessment (Skin, Edema, Respiration, etc.) for Level 1 or 2-3 care.
- **IV Infusion (Phiếu truyền dịch)**: Specialized form for tracking fluid administration, flow rates, and batch numbers. Includes a streamlined link to view full infusion history.
- **Patient Transfer (Bàn giao chuyển khoa)**: Structured handover process tracking clinical status, devices (catheters, drains), and medications.

### 2.4. Staff Tools
- **Schedule**: Weekly shift management and task lists.
- **Alerts**: Urgency-categorized notifications for patient emergencies and updates.
- **Profile**: Staff professional profile, stats, and settings.

## 3. Design Principles (Clinical Clarity)
- **Visual Style**: Soft, modern, and professional.
- **Typography**: Inter (Sans-serif), prioritizing legibility and hierarchical data.
- **Colors**: Medical blue primary (#1976D2), white surfaces, and subtle status-based semantic colors (green for stable, red for critical).
- **Components**: Rounded cards (8px), clear data grids (2x2 or 3rd-column), and high-density information layouts.
- **Read-Only Context**: Consistent patient header across all clinical forms (Mã BN, Khoa, Phòng, Giường) that is auto-filled and non-editable.

## 4. Technical Constraints
- **Device**: Optimized for Mobile, adaptable for Web.
- **Navigation**: Clean header with back buttons on sub-pages; logo/app name on Home. No persistent navigation bars on deep clinical forms.
- **Language**: Vietnamese (Tiếng Việt).