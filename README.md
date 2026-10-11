# Faculty Reviews

A course and instructor review platform built for IBA Karachi students by a three-person
student team in spring 2024. Students sign up with their 5-digit ERP number, rate each
instructor on four 0 to 5 scales per course (one rating per student per course, enforced by a
compound unique index), leave threaded comments that can be anonymous and carry up and down
votes, post to a discussion feed, and save comments, teachers and courses. Authentication is
JWT based, with User, Moderator and Admin roles.

| Folder | What it is | Stack |
|---|---|---|
| `app/` | Mobile app, 11 screens | Flutter, Dart |
| `api/` | REST API, 50 endpoints over 6 data models | Node.js, Express, MongoDB with Mongoose, JWT |
| `web/` | Web app (branded AcademiQ), 11 routes | React |

Each folder keeps its original commit history: `app/` and `api/` come from my repos
`faculty_review` and `FacultyReview_Backend`, and `web/` from the team's React repo
(`Arbaz21/Frontend`). Team: Zohaib Ali Mughal (the API, the Flutter app and most of the web
app), Arbaz Asif and Muhammad Dawood.

## Running the API

```bash
cd api
npm install
MONGODB_URI='mongodb+srv://...' JWT_SECRET='...' node index.js
```

See `api/.env.example`. Earlier commits hardcoded a database connection string and a signing
key; both values were removed from the entire history when this repo was assembled
(October 2026), and the code now reads them from the environment.
