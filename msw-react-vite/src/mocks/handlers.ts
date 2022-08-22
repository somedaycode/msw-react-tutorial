import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Kim, Seonkyu',
        },
        {
          id: 2,
          name: 'Dev, Momori',
        },
      ])
    );
  }),
];
