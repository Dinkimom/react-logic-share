# Пример шаринга логики между веб и мобильным приложениями

Проект представляет собой приложение "Список дел" разработанное на веб и мобильной платформах.

Веб приложение разработано на React, мобильное на React Native.

Для большей наглядности проект разработан в монорепозитории. Для управления репозиторием использовалась библиотека NX.

## Стек

- React
- React Native
- Express
- MongoDB
- TypeScript
- NX
- axios
- react-query

## Как запустить

1. Запустить MongoDB клиент

2. Запустить серверное приложение:
```bash
yarn start:server
```

3. Запустить веб-приложение:
```bash
yarn start:web
```

4. Поменять адрес серверного приложения в мобильном приложении в файле `apps/mobile/src/services/httpClient.ts`
```javascript
import { createHttpClient } from '@react-logic-share/http-client';

export const httpClient = createHttpClient({ baseUrl: 'url серверного приложения' });
```

5. Запустить мобильное приложение:
```bash
yarn start:mobile
```

## Полезные материалы

[Ссылка на презентацию с митапа](https://docs.google.com/presentation/d/1Jv8rgjJyEmIFS1Nq1Desbuv2oUTUjZfmNvX3AWQQuCw)

[Роберт Мартин "Чистая архитектура. Искусство разработки программного обеспечения"](https://www.litres.ru/robert-s-martin/chistaya-arhitektura-iskusstvo-razrabotki-program-39113892/)

[feature-sliced-architecture](https://feature-sliced.design)

## Контакты

<a href="https://vk.com/soitwouldseem">![vk](https://img.shields.io/badge/вконтакте-%232E87FB.svg?&style=for-the-badge&logo=vk&logoColor=white)
<a href="https://t.me/soitwouldseem">![vk](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)
