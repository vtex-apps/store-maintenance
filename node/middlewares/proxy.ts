export async function proxy(ctx: Context, next: () => Promise<any>) {
  let isMaintainance = ctx.originalUrl === '/maintainance'

  console.log('## ctx.originalUrl', ctx.originalUrl)
  console.log('## isMaintainance', isMaintainance)

  if (!isMaintainance) {
    ctx.redirect('/maintainance')
  }
  else {
    ctx.body = 'maintainance page'
  }
  await next()
}
