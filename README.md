# Bitasmbl-Simple-Budget-&-Expenses-Dashboard-ed5f3c-Nodar_Mebunia

## Description
Build a web application that allows users to track their income and expenses, visualize monthly spending patterns with charts, and gain insights into their financial habits. Focus on simplicity, intuitive charts, and interactive summaries.

## Tech Stack
- Objective-C
- MobX
- Chart.js

## Requirements
- Categorize expenses and show monthly totals
- Provide a summary of monthly or yearly budgets
- Allow users to edit or delete previous entries
- Visualize spending patterns using interactive charts
- Allow users to input income and expense entries

## Installation
Step-by-step setup guide for the selected tech stacks.

1. Clone the repository (replace with your preferred path):
   git clone https://github.com/MrBitasmblTester2/Bitasmbl-Simple-Budget-&-Expenses-Dashboard-ed5f3c-Nodar_Mebunia.git

2. JavaScript frontend (MobX + Chart.js) - install dependencies:
   - Ensure Node.js and npm are installed on your machine.
   - From the project root run:
     npm install

   - Development server (if provided by the repository):
     npm run start

   - Build static assets (if a build step exists):
     npm run build

   Note: The repository may include the frontend code as a folder or as assets expected to be included in the Objective-C app. Adjust the commands to the actual frontend directory if present.

3. Objective-C (native app) - open and build in Xcode:
   - Open the Xcode project or workspace included in the repository. For example:
     open Bitasmbl-Simple-Budget-&-Expenses-Dashboard.xcodeproj

   - In Xcode, select a simulator or device and click Run to build and launch the app.

4. Integrating built frontend assets into the Objective-C app (if applicable):
   - If you built web assets with npm run build, copy the generated static files into the Xcode project resources (e.g., a Resources/www or Assets folder).
   - Ensure the Objective-C app loads these files (for example, via a WKWebView) so Chart.js and MobX code can render interactive charts.

No additional environment variables are required by the selected stacks by default.

## Usage
- Frontend (MobX + Chart.js):
  - From the project root or frontend directory, run npm install and then npm run start to launch the development server (if provided).
  - To produce production-ready static assets, run npm run build and then integrate those assets into the Objective-C app resources if the app uses a bundled web UI.

- Objective-C app:
  - Open the provided .xcodeproj or .xcworkspace in Xcode.
  - Build and run the app on a simulator or device.
  - The app should provide forms to input income and expense entries, list views to edit or delete entries, and a charting view that displays interactive spending patterns powered by Chart.js (loaded in a WKWebView or native integration).

- Typical workflow:
  1. Start the frontend dev server (if developing the web UI) with npm run start.
  2. Open and run the Objective-C app in Xcode to test integration with the web UI or native views.
  3. Add, edit, and delete entries inside the app and verify charts and summaries update accordingly.

## Implementation Steps
1. Clone the repository to your local machine using the provided git clone command.
2. Install JavaScript dependencies required for MobX and Chart.js:
   - From the project root or frontend folder run: npm install
3. Create the core data model in Objective-C:
   - Define Expense and Income classes/structs with properties: id, amount, category, date, notes, and type (income/expense).
4. Implement local persistence on the Objective-C side:
   - Use a lightweight local store (NSUserDefaults, a local JSON file in the app sandbox, or appropriate local persistence) to save entries. Ensure read/write methods are implemented.
5. Build the input UI in Objective-C:
   - Create screens/forms to allow users to input income and expense entries with fields for amount, date, category, and optional notes.
6. Implement list views with edit and delete capabilities:
   - Present entries in a table or collection view. Add edit and delete actions that update the local store and notify the UI to refresh.
7. Compute summaries (monthly and yearly budgets):
   - Add utility methods to aggregate entries by month and year and compute totals and category breakdowns.
8. Create the charting module using MobX and Chart.js:
   - Implement a small JavaScript UI that uses MobX for state management (observables for entry list and aggregations) and Chart.js to render interactive charts (e.g., monthly spending, category breakdowns).
9. Integrate the web chart UI into the Objective-C app:
   - Load the built JavaScript/HTML assets into a WKWebView. Use WKScriptMessageHandler and postMessage to exchange data between Objective-C and the web UI.
10. Wire synchronization between Objective-C persistence and the MobX state:
   - On app start, load persisted entries in Objective-C and pass them to the web UI. On add/edit/delete, update persistence and send updated state to the web UI so MobX updates charts.
11. Implement category totals and monthly aggregation in both Objective-C (for summaries) and in the web UI (to power Chart.js visualizations).
12. Ensure interactive chart behavior:
   - Configure Chart.js charts to support hover, click, and tooltips. Handle chart events in the web UI and, if needed, forward interactions to the Objective-C layer.
13. Test functionality end-to-end:
   - Verify adding income/expense entries, editing, deleting, persistence across launches, monthly/yearly summaries, category totals, and interactive charts.
14. Prepare release build:
   - Build production web assets (npm run build) and include them in the final Xcode app bundle. Archive and distribute via Xcode as needed.

## API Endpoints (Optional)
This project uses local persistence and native/web integration patterns (Objective-C + embedded web UI). No external backend API endpoints are required by the specified stacks and requirements, so no API routes are documented here.