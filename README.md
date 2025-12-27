# Flowva Rewards Page – Technical Assessment

This project recreates the **Rewards page** of the Flowva platform with a focus on
**UI accuracy, real Supabase usage, clean architecture, and correct business logic**.

---

## Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS
- **Backend & DB:** Supabase (Auth, Database, RPC)
- **State:** React Context + custom hooks

---

## Core Features Implemented

### Authentication
- Supabase email/password authentication
- Auth state managed via `AuthContext`
- Profile data fetched separately via `ProfileContext`

### Rewards System
- Rewards fetched from Supabase and displayed with locked/unlocked states
- Rewards automatically unlock when user points meet requirements
- User-reward relationship handled via `user_rewards` table

### Daily Check-In
- Daily streak logic with:
  - Consecutive day tracking
  - Auto-reset on missed day
  - One claim per calendar day
- Points awarded via secure RPC
- UI updates immediately after successful check-in

### Redeem Rewards Tab
- Lists user rewards by status (locked / unlocked / redeemed)
- Backend-controlled transitions to prevent tampering

---

## Database & Backend Design

### Key Tables
- `profiles` – user points & metadata
- `rewards` – static reward definitions
- `user_rewards` – per-user reward state
- `daily_streaks` – streak tracking

### RPC Functions
- `check_in_daily_streak()` – handles daily claim logic
- `unlock_rewards_if_eligible()` – auto-unlocks rewards when points increase

### Security
- Row Level Security enabled on all user-scoped tables
- Users can only read their own data
- All mutations handled via RPCs (no direct client writes)

---

## UI Decisions

- Matched spacing, colors, typography, and iconography to the provided design
- Reward icons treated as images and unicode characters (not SVG icons) to match visual style
- Loading, empty, and error states handled explicitly

---

## Assumptions Made

### Reward redemption UI is not exposed

- The provided design does not show a redeem interaction 
- Therefore, full redemption flows are implemented at the data level but not surfaced in the UI

### Points unlock rewards but do not auto-redeem

- Unlocking and redeeming are treated as separate concerns

- This mirrors common real-world reward systems

### Exact copywriting may differ slightly

- Text content was aligned as closely as possible with the provided UI

- Priority was given to structure and behavior over exact wording

## Trade-offs & Reasoning
### Why not manage streak logic in React?

- Date-based logic is error-prone on the client

- Timezone differences introduce bugs

- Backend enforcement is safer and more scalable

### Why Context instead of local state?

- Avoids duplicated data sources

- Ensures instant UI updates after mutations

- Simplifies mental model for reviewers

### Why not over-engineer reward redemption?

- No visible UX path for redemption in the provided design

- Implementing unused features adds unnecessary complexity

- Backend support exists if the feature is later exposed
---

## How to Run

1. Clone the repo
2. Add Supabase keys to `.env`
3. Run `npm install`
4. Start with `npm run dev`

