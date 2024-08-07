'use client'

const makeRequest = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      Cookie:
        'pma_lang=en; phpMyAdmin=41d2c53feb401205e677497e8f2d578f; pmaUser-1=McyWk%2BGH7uMfqrQ8YBXsvTezyPl75OG7B%2FfSMU%2BDMrbuDWRZyNNkDx3iMxg%3D; pmaAuth-1=CBqwXLsQZTNTPyadN%2B4CxAlj2REywO0TXsFGd9Jy7VtErKxSGYDa7d7rsvSmMQajIdUBQasaWRv3yvQ%3D; _local_=s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjAwMC0wMDAiLCJnZW5kZXIiOm51bGwsImlzQWN0aXZhdGVkIjp0cnVlLCJiaXJ0aERhdGUiOm51bGwsImJpcnRoRGF0ZVN0cmluZyI6bnVsbCwibW9iaWxlIjoiMDkwMDc4NjAxIiwiZmlyc3ROYW1lIjoiZmlyc3RuYW5tZSIsImxhc3ROYW1lIjpudWxsLCJtaWRkbGVOYW1lIjpudWxsLCJmdWxsTmFtZSI6ImZpcnN0bmFubWUiLCJ1c2VybmFtZSI6ImFobWFkIiwiZW1haWwiOiJ0ZXN0aW5nQGdtYWlsLmNvbSIsInRpdGxlIjpudWxsLCJ1c2VyU2V0dGluZyI6eyJ1bml0cyI6eyJ3ZWlnaHQiOiJsYiIsInRlbXBlcmF0dXJlIjoiQyJ9fSwiaGVpZ2h0IjpudWxsfSwicHJvZmlsZSI6eyJ1c2VySWQiOiIwMDAtMDAwIiwiZnVsbE5hbWUiOiJmaXJzdG5hbm1lIiwiZmlyc3ROYW1lIjoiZmlyc3RuYW5tZSIsIm1pZGRsZU5hbWUiOm51bGwsImxhc3ROYW1lIjpudWxsLCJtb2JpbGUiOiIwOTAwNzg2MDEiLCJwYXRpZW50SWQiOm51bGwsImlzUGluU2V0IjpudWxsLCJndWFyZGlhbklkIjpudWxsLCJlbXBsb3llZUlkIjpudWxsLCJlbXBsb3llZVR5cGUiOm51bGwsImlzU3VwZXJBZG1pbiI6dHJ1ZSwic2hvd0Fub255bW91c0RhdGEiOmZhbHNlLCJob21lSGVhbHRoQWdlbmN5SWQiOm51bGwsInJvbGVzIjpbeyJyb2xlIjoiU1VQRVJBRE1JTiJ9XSwidXNlclNldHRpbmciOnsidW5pdHMiOnsid2VpZ2h0IjoibGIiLCJ0ZW1wZXJhdHVyZSI6IkMifX0sInR6T2Zmc2V0IjoxODAwMH0sInVzZXJEZXZpY2VJZCI6IjU4ZjVhZDU0LWFkNDktNGVkMS1iYWI1LTI1MTIwMDY3MzMzOCIsImlhdCI6MTcyMjMyNzE3MCwiZXhwIjoxNzIyNDEzNTcwfQ.p3hPinII6pS85bV0xwtIfhT37x2PQgygA3srSDxjHso.TTXnIKsvDhCj38GpFnQRQ0CBTfKTWr%2BU7mePdbOHVRo',
    },
    credentials: 'include',
  })

  return response.json()
}

const useObervationData = () => {
  const getObservationData = async ({
    page,
    per_page,
  }: {
    page: number
    per_page: number
  }) => {
    const base_url = `http://localhost:3000/rms/v1/orderable-value/observations?page=${page}&per_page=${per_page}&search=${search}`
    return makeRequest(base_url)
  }

  const getPractices = async () => {
    const base_url = 'http://localhost:3000/rms/v1/healthcare-facility/employee'
    return makeRequest(base_url)
  }

  const ObservationMethods = {
    getObservationData,
    getPractices,
  }

  return { ObservationMethods }
}

export default useObervationData
