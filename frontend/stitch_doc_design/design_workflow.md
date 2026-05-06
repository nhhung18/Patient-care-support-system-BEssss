# PCSS App - Workflow Logic & Navigation Map

## 1. Project Overview
- **Platform:** Android (Primary), Responsive for Tablet.
- **Navigation Type:** Stack Navigation + Bottom Navigation.
- **Primary Flow:** Patient Management & Clinical Documentation.

## 2. Navigation Structure (Routing Map)

### Phase 1: Entry & Global Navigation
- **Root Screen:** `Main menu` (Launcher Screen)
- **Global Bottom Bar (Available on Main Screens):**
  - Home -> `Main menu`
  - Schedule -> `Schedule`
  - Notification -> `Notification`
  - Profile -> `User information`

### Phase 2: Patient Management Flow
`Main menu`
 └── Click 'Room manage' 
      └── **SCR: Room manage** (List of rooms)
           └── Click on specific room
                └── **SCR: Room detail** (List of beds)
                     └── Click "Detail" (on each bed)
                          └── **SCR: Patient detail**

### Phase 3: Clinical Actions (The Pop-up Flow)
**SCR: Patient detail**
 └── Click "Execute function"
      └── **MODAL: Pop-up Thực hiện chức năng** (List of Sub-flows)
           ├── Click "View medical record" -> **SCR: medical record**
           ├── Click "Create order" -> **SCR: Create Order**
           ├── Click "Order execution history" -> **SCR: Order History**
           ├── Click "Transfer patient" -> **SCR: Transferring patients to other departments**
           |
           ├── **SUB-FLOW: Care Ticket**
           │    └── Click "View and create care ticket"
           │         └── **SCR: Create care ticket parent**
           │              └── Click 'List of created parent tickets'
           │                   └── **SCR: List created care ticket parent**
           │                        └── Click 'Detail' (next to List of child tickets)
           │                             └── **SCR: List created care ticket child**
           │                                  └── Click "Create child care ticket"
           │                                       └── **SCR: Create care ticket child**
           |
           └── **SUB-FLOW: Infusion**
                └── Click "View and create infusion ticket"
                     └── **SCR: Create infusion**
                          └── Click "View all" (at Recent infusion history)
                               └── **SCR: infusion history**

## 3. Responsive Logic for Tablet
- **Master-Detail Pattern:** 
  - If `Device == Tablet`, `Room manage` (List) and `Room detail` (Detail) should display side-by-side on a single screen.
  - Sub-menus in `Pop-up Thực hiện chức năng` can be displayed as a Persistent Side Drawer instead of a Modal.

## 4. AI Agent Build Instructions
1. **State Persistence:** Maintain `PatientID` and `RoomID` throughout the navigation stack from `Room manage` down to `Create care ticket child`.
2. **Auto-fill Logic:** Screens related to updating patient info must auto-populate data from the global `PatientObject`.
3. **Back Stack:** Ensure the "Back" button follows the reverse of the tree above, especially for the complex Care Plan sub-flow.
4. **Placeholder Screens:** Create empty templates for: `shift handover`, `patient handover`, `general summary`, `scan document`, `scan history`.