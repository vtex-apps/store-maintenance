(function() {
    if (!location.pathname.endsWith('/maintenance')) {
      location.href = '/maintenance'
    }
  })()