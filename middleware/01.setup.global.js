export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('--- SETUP GLOBAL MIDDLEWARE ---');
  
  // Error Handling
  // return abortNavigation('Error Message here')

  // Custom Error
  if (to.path === '/login') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Oh snap it broke!'
    })
  }
  
  try {
    // Do Something
    // return navigateTo(`/profile/${data.user.name}`)
  } catch (error) {
    return 
  }
})