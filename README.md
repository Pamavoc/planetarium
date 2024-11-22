## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```


## Extensions

Install `https://nuxtr.com/`


## Prisma 

Install postgresql : `https://www.pgadmin.org/download`

Modify `.env` : 
`DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`
`DATABASE_URL=postgresql://postgres:admin@localhost:5432/gobelins?schema=public`

Create your schema in schema.prisma

Finally, run : npm prisma migrate dev --name init