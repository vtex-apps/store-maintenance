export async function proxy(ctx: any, next: () => Promise<any>) {
  let isMaintenance = ctx.originalUrl.endsWith('/maintenance')

  console.log('## ctx.originalUrl', ctx.originalUrl)
  console.log('## isMaintenance', isMaintenance)

  if (!isMaintenance) {
    ctx.status = 302
    ctx.redirect('/maintenance')
  }
  else {
    ctx.body = 'The site is under maintenance'
  }
  await next()
}
