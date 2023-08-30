# Kanban board stef

- [] Prisma opzetten
- [] Wireframes welke pagina's
- [] Document met api endpoints
- [] Database schema (https://diagramplus.com/)

### Vereisten

- [] Lanes op basis van api
- [] Cards op basis van api
- [] socket updates
- [] OpenApi gebruiken (Orval generator)

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
