# Kanban board stef

- [x] Prisma opzetten
- [x] Wireframes welke pagina's
- [x] Document met api endpoints
- [x] Database schema (https://diagramplus.com/)

### Vereisten

- [x] Lanes op basis van api
- [x] Cards op basis van api
- [] OpenApi gebruiken (Orval generator)
- [] Components maken in React
- [] TailwindCSS stijlen
- [] Integratie met de api
- [] Sockets

### Documentaties

https://tailwindcss.com/
https://react.dev/
https://docs.nestjs.com/
https://docs.nestjs.com/recipes/prisma#set-up-prisma
https://docs.nestjs.com/websockets/gateways
https://docs.nestjs.com/openapi/introduction
https://orval.dev/

```
GET /api/lanes
[{
id: string,
name: string
}]

GET /api/lanes/:id/cards
[
{
id: string,
name: string,
description: string,
priority: int,
assignee: string
}
]

POST /api/cards
{
name: string,
laneId: string
description: string,
priority: int,
assignee: string
}

PUT /api/cards/:id
{
id: string,
name: string,
laneId: string,
description: string,
priority: int,
assignee: string
}

DELETE /api/cards/:id
```
