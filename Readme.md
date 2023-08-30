# Kanban board stef

- [x] Prisma opzetten (https://docs.nestjs.com/recipes/prisma#set-up-prisma)
- [x] Wireframes welke pagina's
- [x] Document met api endpoints
- [x] Database schema (https://diagramplus.com/)

### Vereisten

- [x] Lanes op basis van api
- [x] Cards op basis van api
- [ ] OpenApi gebruiken (Orval generator) (https://docs.nestjs.com/openapi/introduction) (https://orval.dev/)
- [ ] Components maken in React (https://react.dev/)
- [ ] TailwindCSS stijlen (https://tailwindcss.com/)
- [ ] Integratie met de api
- [ ] Sockets (https://docs.nestjs.com/websockets/gateways)

### Documentaties
https://docs.nestjs.com/

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
