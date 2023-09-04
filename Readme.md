# Kanban board stef

- [x] Prisma opzetten (https://docs.nestjs.com/recipes/prisma#set-up-prisma)
- [x] Wireframes welke pagina's
- [x] Document met api endpoints
- [x] Database schema (https://diagramplus.com/)

### Vereisten

- [x] Lanes op basis van api
- [x] Cards op basis van api
- [x] OpenApi gebruiken (Orval generator)
- [x] Components maken in React
- [x] TailwindCSS stijlen
- [x] Integratie met de api
- [ ] Sockets

- debounce -> input veranderd -> 100ms
- prisma.io/docs/concepts/components/prisma-schema/relations#retrieve-a-record-and-include-related-records
- https://docs.nestjs.com/openapi/types-and-parameters#circular-dependencies
- https://github.com/frost-up/gtm-proxy/blob/master/front-end/components/user/list.vue#L195|
- https://github.com/frost-up/gtm-proxy/blob/master/front-end/utils/debounce.ts
- https://github.com/frost-up/gtm-proxy/blob/master/front-end/components/user/list.vue#L244

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
